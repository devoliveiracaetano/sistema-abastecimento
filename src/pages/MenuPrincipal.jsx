import React from "react";
import { useNavigate } from "react-router-dom";
import "./MenuPrincipal.css";

export default function MenuPrincipal() {
  const navigate = useNavigate();

  return (
    <div className="menu-container">
      <h1>Menu Principal</h1>
      <div className="menu-buttons">
        <button onClick={() => navigate("/cadastro-caminhoes")}>
          Cadastrar Caminhão
        </button>
        <button onClick={() => navigate("/lista-caminhoes")}>
          Ver Caminhões
        </button>
        <button onClick={() => navigate("/lista-cargas")}>
          Lista de Cargas
        </button>
        <button onClick={() => navigate("/")}>Logout</button>
      </div>
    </div>
  );
}
