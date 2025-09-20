import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { rotas } from "../routes";
import "./Layout.css";

export default function Layout() {
  const [sidebarAberto, setSidebarAberto] = useState(true);
  const location = useLocation(); // Hook do React Router para detectar rota atual

  // Fecha sidebar automaticamente ao mudar de rota
  useEffect(() => {
    setSidebarAberto(false);
  }, [location.pathname]);

  const toggleSidebar = () => setSidebarAberto(!sidebarAberto);

  return (
    <div className="layout-container">
      <div className={`sidebar-wrapper ${sidebarAberto ? "aberto" : ""}`}>
        <Sidebar rotas={rotas} />
      </div>

      <div className="main-content">
        <button className="menu-toggle-btn" onClick={toggleSidebar}>
          ☰
        </button>
        <Outlet />
      </div>
    </div>
  );
}
