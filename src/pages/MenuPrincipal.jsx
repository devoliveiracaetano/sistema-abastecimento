import React from "react";
import { useNavigate } from "react-router-dom";
import "./MenuPrincipal.css";

export default function MenuPrincipal() {
  const navigate = useNavigate();

  return (
    <div className="menu-container">
      <h1>Menu Principal</h1>
      <div className="menu-buttons">
        <button onClick={() => navigate("/lista-cargas")}>
          Lista de Cargas
        </button>
        <button onClick={() => navigate("/cadastro-caminhoes")}>
          Cadastro de Caminhões
        </button>
        <button onClick={() => navigate("/lista-caminhoes")}>
          Lista de Caminhões
        </button>
        <button onClick={() => navigate("/manutencao-caminhoes")}>
          Registro de Manutenção
        </button>
        <button onClick={() => navigate("/lista-manutencoes")}>
          Lista de Manutenções
        </button>
        <button onClick={() => navigate("/cadastro-posto")}>
          Cadastro de Posto
        </button>
        <button onClick={() => navigate("/")}>Voltar para Login</button>
      </div>
    </div>
  );
}
