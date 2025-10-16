// App.jsx
import React from "react";
import { FloatingCTA } from "./components/FloatingCTA";
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./Layout.jsx";
// import Register from "./pages/Register.jsx";
// import Login from "./pages/Login.jsx";

// import Dashboard from "./pages/Dashboard.jsx";
// import Index from "./pages/Index.jsx";

export default function App() {
  return (
    <body className="text-white text-base not-italic normal-nums font-normal accent-auto bg-neutral-950 box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc min-h-full pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-nhaasgrotesktxpro">
      <FloatingCTA />
      <Header />
      <Hero />
      {/* <Blog /> */}
    </body>
  );
}
