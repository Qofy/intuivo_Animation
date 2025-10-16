import {
	BarChart2,
	BookOpen,
	Building,
	Calendar,
	Edit3,
	FileText,
	Folder,
	GraduationCap,
	LayoutDashboard,
	Mail,
	Menu,
	MessageSquare,
	Package,
	Plus,
	Receipt,
	Settings,
	Star,
	Tag,
	Users,
	X,
} from "lucide-react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";

const navigationItems = [
	{
		title: "Dashboard",
		url: createPageUrl("Dashboard"),
		icon: LayoutDashboard,
	},
];

function NavItem({ item, location, onClick }) {
	const [isOpen, setIsOpen] = useState(false);
	const isActive = item.subItems
		? item.subItems.some((sub) => location.pathname.startsWith(sub.url))
		: location.pathname.startsWith(item.url);

	if (item.subItems) {
		return (
			<div>
				<button
					onClick={() => setIsOpen(!isOpen)}
					className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${isActive ? "neumorphic-nav-active text-primary" : "text-secondary hover:text-primary"}`}
				>
					<div className="flex items-center gap-3">
						<item.icon className="w-5 h-5" />
						<span className="font-medium">{item.title}</span>
					</div>
					<svg
						className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path
							fillRule="evenodd"
							d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
				{isOpen && (
					<div className="pl-6 mt-2 space-y-2">
						{item.subItems.map((subItem) => (
							<Link
								key={subItem.title}
								to={subItem.url}
								onClick={onClick}
								className={`flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-200 ${location.pathname.startsWith(subItem.url) ? "neumorphic-nav-active text-primary" : "text-secondary hover:text-primary"}`}
							>
								<subItem.icon className="w-4 h-4" />
								<span className="font-medium text-sm">{subItem.title}</span>
							</Link>
						))}
					</div>
				)}
			</div>
		);
	}

	return (
		<Link
			to={item.url}
			onClick={onClick}
			className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${isActive ? "neumorphic-nav-active text-primary" : "text-secondary hover:text-primary"}`}
		>
			<item.icon className="w-5 h-5" />
			<span className="font-medium">{item.title}</span>
		</Link>
	);
}

function OnlineIndicator() {
	const [status, setStatus] = React.useState({ online: typeof navigator !== 'undefined' ? navigator.onLine : true, pending: 0 });

	React.useEffect(() => {
		const update = () => setStatus({ online: navigator.onLine, pending: (JSON.parse(localStorage.getItem('offline_queue') || '[]')).length });
		window.addEventListener('online', update);
		window.addEventListener('offline', update);
		window.addEventListener('syncStatus', (e) => setStatus(e.detail));
		update();
		return () => {
			window.removeEventListener('online', update);
			window.removeEventListener('offline', update);
		};
	}, []);

	const color = !status.online ? '#dc2626' : (status.pending > 0 ? '#f59e0b' : '#16a34a');
	const title = !status.online ? 'Offline' : (status.pending > 0 ? `Syncing (${status.pending})` : 'Online');
	return (
		<div title={title} style={{ position: 'fixed', top: 12, right: 12, zIndex: 50 }}>
			<div style={{ width: 12, height: 12, borderRadius: 9999, background: color, boxShadow: '0 0 0 2px rgba(0,0,0,0.05)' }} />
		</div>
	);
}

function StatusBanner() {
	const [status, setStatus] = React.useState({
		online: typeof navigator !== 'undefined' ? navigator.onLine : true,
		pending: 0,
		isSyncing: false,
		nextRetryIn: 0,
		failureCount: 0
	});
	React.useEffect(() => {
		const update = () => setStatus({ online: navigator.onLine, pending: (JSON.parse(localStorage.getItem('offline_queue') || '[]')).length });
		const onSync = (e) => setStatus(e.detail);
		window.addEventListener('online', update);
		window.addEventListener('offline', update);
		window.addEventListener('syncStatus', onSync);
		update();
		return () => {
			window.removeEventListener('online', update);
			window.removeEventListener('offline', update);
			window.removeEventListener('syncStatus', onSync);
		};
	}, []);

	if (status.online && status.pending === 0) return null;

	const bg = !status.online ? 'bg-red-600' : (status.isSyncing ? 'bg-blue-600' : 'bg-amber-500');

	let msg;
	if (!status.online) {
		msg = 'Offline — changes will sync when you are back online';
	} else if (status.isSyncing) {
		msg = `Syncing ${status.pending} change${status.pending === 1 ? '' : 's'}...`;
	} else if (status.nextRetryIn > 0) {
		const minutes = Math.floor(status.nextRetryIn / 60);
		const seconds = status.nextRetryIn % 60;
		const timeStr = minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds}s`;
		msg = `${status.pending} pending — retrying in ${timeStr}`;
	} else if (status.pending > 0) {
		msg = `${status.pending} change${status.pending === 1 ? '' : 's'} pending`;
	} else {
		msg = 'Syncing...';
	}

	return (
		<div className={`fixed top-4 left-1/2 -translate-x-1/2 ${bg} text-white px-4 py-2 rounded shadow-lg z-50 flex items-center gap-2`}
			style={{ boxShadow: '0 8px 16px rgba(0,0,0,0.15)' }}
		>
			<span className={`inline-block w-2 h-2 rounded-full bg-white ${status.isSyncing ? 'animate-pulse' : ''}`} />
			<span className="text-sm font-medium">{msg}</span>
		</div>
	);
}

function AppLayout({ children, currentPageName }) {
	const location = useLocation();
	const [contextData, setContextData] = React.useState(null);
	const [pageType, setPageType] = React.useState(null);
	const [aiChatOpen, setAiChatOpen] = React.useState(false);
	const [sidebarOpen, setSidebarOpen] = React.useState(false);

	React.useEffect(() => {
		const handleContextUpdate = (event) => {
			setContextData(event.detail.contextData);
			setPageType(event.detail.pageType);
		};
		window.addEventListener("updateAiContext", handleContextUpdate);
		return () =>
			window.removeEventListener("updateAiContext", handleContextUpdate);
	}, []);

	// Auto-close sidebar on navigation (mobile)
	React.useEffect(() => {
		setSidebarOpen(false);
	}, [location.pathname]);

	return (
		<div className="min-h-screen" style={{ backgroundColor: "#e0e0e0" }}>
			<style>{`
        .neumorphic-card { background: #e0e0e0; border-radius: 20px; box-shadow: 8px 8px 16px #bebebe, -8px -8px 16px #ffffff; }
        .neumorphic-inset { background: #e0e0e0; border-radius: 15px; box-shadow: inset 4px 4px 8px #bebebe, inset -4px -4px 8px #ffffff; }
        .neumorphic-button { background: #e0e0e0; border-radius: 12px; box-shadow: 4px 4px 8px #bebebe, -4px -4px 8px #ffffff; transition: all 0.2s ease; border: none; }
        .neumorphic-button:hover { box-shadow: 2px 2px 4px #bebebe, -2px -2px 4px #ffffff; }
        .neumorphic-button:active { box-shadow: inset 2px 2px 4px #bebebe, inset -2px -2px 4px #ffffff; }
        .neumorphic-nav-active { box-shadow: inset 3px 3px 6px #bebebe, inset -3px -3px 6px #ffffff; }
        .shadow-inner-intense { box-shadow: inset 6px 6px 12px #bebebe, inset -6px -6px 12px #ffffff; }
        .text-primary { color: #4a4a4a; }
        .text-secondary { color: #6a6a6a; }
        .text-muted { color: #8a8a8a; }
        .status-draft, .status-pending { background: #d4d4d4; color: #6a6a6a; }
        .status-sent, .status-approved, .status-active, .status-published, .status-new { background: #c8d4e8; color: #4a6ba8; }
        .status-paid { background: #c8e8d4; color: #4a8a6b; }
        .status-overdue, .status-rejected, .status-cancelled, .status-expired, .status-inactive, .status-sold_out, .status-archived { background: #e8c8c8; color: #a84a4a; }
        * { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
      `}</style>

			<div className="flex h-screen relative">
				{/* Mobile Menu Button */}
				<button
					onClick={() => setSidebarOpen(!sidebarOpen)}
					className="lg:hidden fixed top-4 left-4 z-50 p-3 neumorphic-button shadow-lg"
				>
					{sidebarOpen ? <X className="w-5 h-5 text-primary" /> : <Menu className="w-5 h-5 text-primary" />}
				</button>

				{/* Mobile Overlay */}
				{sidebarOpen && (
					<div
						className="lg:hidden fixed inset-0 bg-black bg-opacity-40 z-30"
						onClick={() => setSidebarOpen(false)}
					/>
				)}

				{/* Sidebar */}
				<aside
					className={`${
						sidebarOpen ? "translate-x-0" : "-translate-x-full"
					} lg:translate-x-0 fixed lg:static w-64 h-full p-4 flex-shrink-0 transition-transform duration-300 ease-in-out z-40 bg-[#e0e0e0]`}
					style={{ overflowY: 'auto' }}
				>
					<div className="neumorphic-card p-6 mb-6">
						<div className="text-center">
							<div className="neumorphic-inset w-16 h-16 mx-auto mb-4 flex items-center justify-center">
								<Receipt className="w-8 h-8 text-primary" />
							</div>
							<h1 className="text-xl font-bold text-primary mb-1">TemplateTitle</h1>
							<p className="text-sm text-secondary">Business Management</p>
						</div>
						<div className="mt-4 pt-4 border-t border-gray-300">
							<p className="text-xs text-secondary text-center mb-2 uppercase tracking-wider">
								Current Company
							</p>
							<Link
								to={createPageUrl("Companies")}
								className="neumorphic-button w-full text-center p-2.5 block hover:shadow-none transition-all"
							>

							</Link>
						</div>
					</div>
					<div className="neumorphic-card p-4">
						<nav className="space-y-2">
							{navigationItems.map((item) => (
								<NavItem
									key={item.title}
									item={item}
									location={location}
									onClick={() => window.innerWidth < 1024 && setSidebarOpen(false)}
								/>
							))}
						</nav>
						<div
							className="mt-6 pt-6"
							style={{ borderTop: "1px solid #d4d4d4" }}
						>
							<Link
								to={createPageUrl("Login")}
								className="neumorphic-button w-full flex items-center justify-center gap-2 py-3 text-primary font-medium mb-2"
							>
								<Plus className="w-5 h-5" /> Login
							</Link>
							<Link
								to={createPageUrl("Register")}
								className="neumorphic-button w-full flex items-center justify-center gap-2 py-3 text-primary font-medium mb-2"
							>
								<Plus className="w-5 h-5" /> Register
							</Link>
							<Link
								to={createPageUrl("CreateQuote")}
								className="neumorphic-button w-full flex items-center justify-center gap-2 py-3 text-primary font-medium"
							>
								<Plus className="w-5 h-5" /> New Quote
							</Link>
						</div>
					</div>
				</aside>

				{/* Main Content */}
				<main className="flex-1 p-6 overflow-y-auto lg:ml-0">
					<OnlineIndicator />
					<StatusBanner />

				<div className="max-w-7xl mx-auto">{children}</div>
				</main>

		</div>


				</div>
	);
}

export default function LayoutWrapper(props) {
	return (
			<AppLayout {...props} />
	);
}
