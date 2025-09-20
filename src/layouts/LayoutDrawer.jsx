import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar"; // componente importa seu próprio CSS
import { rotas } from "../routes";
import "./LayoutDrawer.css"; // só importa o CSS do layout

export default function LayoutDrawer() {
  const [sidebarAberto, setSidebarAberto] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setSidebarAberto(false);
  }, [location.pathname]);

  const toggleSidebar = () => setSidebarAberto(!sidebarAberto);

  return (
    <div className="drawer-container">
      <div className={`sidebar-wrapper ${sidebarAberto ? "aberto" : ""}`}>
        <Sidebar rotas={rotas} />
      </div>

      <div className={`main-content ${sidebarAberto ? "sidebar-aberto" : ""}`}>
        <button className="menu-toggle-btn" onClick={toggleSidebar}>
          ☰
        </button>
        <Outlet />
      </div>
    </div>
  );
}
