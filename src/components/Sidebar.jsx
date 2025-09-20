import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar({ rotas }) {
  const rotasMenu = rotas.filter((r) => r.menu);
  const categorias = [
    ...new Set(rotasMenu.map((r) => r.categoria || "Sem Categoria")),
  ];

  return (
    <nav className="sidebar">
      {categorias.map((cat) => (
        <div key={cat} className="menu-categoria">
          <h4>{cat}</h4>
          <ul>
            {rotasMenu
              .filter((r) => r.categoria === cat)
              .map((r) => (
                <li key={r.path}>
                  <NavLink
                    to={r.path}
                    className={({ isActive }) =>
                      isActive ? "active-link" : "inactive-link"
                    }
                  >
                    {r.name}
                  </NavLink>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}
