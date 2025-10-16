// App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";

import Dashboard from "./pages/Dashboard.jsx";
import Index from "./pages/Index.jsx";

export default function App() {
  return (
    <BrowserRouter>
<Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Layout><Index /></Layout>} />
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
     </Routes>
    </BrowserRouter>
  );
}
