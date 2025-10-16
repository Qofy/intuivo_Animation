use actix_cors::Cors;
use actix_files as fs;
use actix_web::{middleware::Logger as ActixLogger, web, App, HttpResponse, HttpServer, Responder};
use colored::*;
use dotenvy::dotenv;
use log::{
    // debug,
    error,
    info,
    trace,
    warn,
    // Level
};
use serde::{Deserialize, Serialize};
// use simplelog::{CombinedLogger, Config, LevelFilter, WriteLogger};
use sled::Db;
use std::env;
use std::fs::File;
use std::net::SocketAddr;
use std::str::FromStr;
use std::sync::Arc;
use syslog::{BasicLogger, Facility, Formatter3164};

#[derive(Serialize, Deserialize, Clone)]
struct Event {
    id: u64,
    title: String,
    date: String,
    time: String,
    description: String,
}

#[derive(Serialize, Deserialize)]
struct NewsletterRequest {
    email: String,
}

/// Handler to return all events stored in the `events` tree.
async fn get_events(db: web::Data<Db>) -> impl Responder {
    let tree = db.open_tree("events").expect("open events tree");
    let mut events = Vec::new();
    for result in tree.iter() {
        if let Ok((_, value)) = result {
            if let Ok(ev) = serde_json::from_slice::<Event>(&value) {
                events.push(ev);
            }
        }
    }
    HttpResponse::Ok().json(events)
}

/// Handler to accept newsletter sign‑ups. Stores the email in the `newsletter` tree.
async fn post_newsletter(db: web::Data<Db>, req: web::Json<NewsletterRequest>) -> impl Responder {
    let tree = db.open_tree("newsletter").expect("open newsletter tree");
    let id = db.generate_id().expect("generate id");
    let bytes = serde_json::to_vec(&req.0).expect("serialize newsletter");
    tree.insert(id.to_be_bytes(), bytes)
        .expect("insert newsletter");
    HttpResponse::Ok().json("Thanks for signing up!")
}

/// Populate some initial events if the database is empty. This is executed at startup.
fn seed_events(db: &Db) {
    let tree = db.open_tree("events").expect("open events tree");
    if tree.is_empty() {
        let sample_events = vec![
            Event {
                id: 1,
                title: "AI Breakfast: Modelling Molecules".into(),
                date: "2025-10-07".into(),
                time: "09:00".into(),
                description: "Learn about AI modelling molecules.".into(),
            },
            Event {
                id: 2,
                title: "Coffee & Code".into(),
                date: "2025-10-08".into(),
                time: "14:00".into(),
                description: "Meet other AI developers and share knowledge.".into(),
            },
            Event {
                id: 3,
                title: "Unconference: Engineering AI Together #4".into(),
                date: "2025-10-08".into(),
                time: "18:00".into(),
                description: "A hands‑on evening for AI builders.".into(),
            },
        ];
        for ev in sample_events {
            let key = ev.id.to_be_bytes();
            let value = serde_json::to_vec(&ev).expect("serialize event");
            tree.insert(key, value).expect("insert event");
        }
        tree.flush().expect("flush events");
    }
}

fn load_env_var(key: &str, default: &str) -> String {
    env::var(key).unwrap_or_else(|_| {
        if default == "/home/zeus" {
            env::var("HOME").unwrap_or_else(|_| "/home".to_string())
        } else {
            default.to_string()
        }
    })
}

fn env_default(key: &str, default: &str) -> String {
    env::var(key).unwrap_or_else(|_| default.to_string())
}

fn resolve_bind_addr() -> SocketAddr {
    // Highest priority: BIND_ADDR
    if let Ok(addr) = env::var("BIND_ADDR") {
        if let Ok(sock) = addr.parse::<SocketAddr>() {
            return sock;
        } else {
            eprintln!(
                "WARN: Invalid BIND_ADDR='{}', falling back to HOST/PORT",
                addr
            );
        }
    }

    // Fallback: HOST + PORT
    let host = env_default("HOST", "127.0.0.1");
    let port: u16 = env::var("PORT")
        .ok()
        .and_then(|s| s.parse().ok())
        .unwrap_or(8080);

    format!("{}:{}", host, port)
        .parse::<SocketAddr>()
        .expect("resolve bind addr")
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    let args: Vec<String> = env::args().collect();
    if args.contains(&String::from("--help")) || args.contains(&String::from("-h")) {
        // print_help();
        error!("Help is missing");
        std::process::exit(0);
    }

    let this_script_relative_path = std::env::args().next().unwrap_or_default();
    let this_script_name = std::path::Path::new(&this_script_relative_path)
        .file_name()
        .unwrap_or_default()
        .to_str()
        .unwrap_or_default()
        .to_owned();
    let this_script_absolute_pathbuf =
        std::env::current_exe().expect("Failed to get the current executable path");
    let this_script_absolute_path = std::path::Path::new(&this_script_absolute_pathbuf);

    // Initialize the logger
    // setup_logger();

    // Load .env .env_cors files and log error if not found
    // load_env_file();
    // check_env_cors();
    dotenvy::dotenv().ok();
    //    dotenv().ok();
    env_logger::Builder::from_env(env_logger::Env::default().default_filter_or("info")).init();
    //env_logger::init();

    // configure syslog logger
    let formatter = Formatter3164 {
        facility: Facility::LOG_USER,
        hostname: None,
        process: "redperiod_backend".into(),
        pid: 0,
    };
    if let Ok(writer) = syslog::unix(formatter) {
        let logger = BasicLogger::new(writer);
        let _ = log::set_boxed_logger(Box::new(logger));
        log::set_max_level(log::LevelFilter::Info);
    }

    info!(
        "\x1b[01;35m # THIS SCRIPT NAME\x1b[38;5;93m:\x1b[38;5;1m {}",
        this_script_name
    );
    info!(
        "\x1b[01;35m # THIS SCRIPT RELATIVE PATH\x1b[38;5;93m:\x1b[38;5;1m {}",
        this_script_relative_path
    );
    info!(
        "\x1b[01;35m # THIS SCRIPT ABSOLUTE PATH\x1b[38;5;93m:\x1b[38;5;1m {:?}",
        this_script_absolute_path
    );
    // Setup logging to a file (syslog style). Logs will be written to logs/app.log.
    //CombinedLogger::init(vec![WriteLogger::new(
    //    LevelFilter::Info,
    //    Config::default(),
    //    File::create("logs/app.log").expect("create log file"),
    // )])
    // .unwrap();
    let db_path = load_env_var("DB_PATH", "./ai_campus_db");
    let db_media = load_env_var("DB_MEDIA", "./data/media");

    let db = sled::open(&db_path).expect("Failed to open sled DB");

    // Open or create the sled database at ./data
    // let db = sled::open("data").expect("open sled database");
    seed_events(&db);
    let db_data = web::Data::new(db);

    let bind_addr = resolve_bind_addr();
    log::info!("Starting server on {}", bind_addr);

    log::info!("{}", format!("Starting server on {}", bind_addr).green());

    HttpServer::new(move || {
        //         let cors = Cors::default()
        // .allow_any_method()
        // .allow_any_header()
        // .supports_credentials()
        // .allowed_methods(vec!["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"])
        // .allowed_headers(vec![
        // header::AUTHORIZATION,
        // header::ACCEPT,
        // header::CONTENT_TYPE,
        // ])
        // .max_age(3600);
        let cors = Cors::permissive();
        trace!("2 cors: {:?}", cors);
        App::new()
            .app_data(db_data.clone())
            // Serve the compiled front‑end from the public directory
            .wrap(ActixLogger::default())
            .wrap(cors)
            // API endpoints
            .route("/api/events", web::get().to(get_events))
            .route("/api/newsletter", web::post().to(post_newsletter))
            // FILES
            .service(
                fs::Files::new("/", "../frontend/dist")
                    .index_file("index.html")
                    .use_last_modified(true),
            )
    })
    .bind(bind_addr)?
    .run()
    .await
}
