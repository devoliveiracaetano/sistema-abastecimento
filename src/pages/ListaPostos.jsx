// src/pages/ListaPostos.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ListaPostos.css";

export default function ListaPostos() {
  const navigate = useNavigate();

  // Dados mokados
  const [postos, setPostos] = useState([
    {
      id: 1,
      nomePosto: "Posto Central",
      nomeGerente: "Carlos Silva",
      nomeSupervisor: "Ana Souza",
      regiao: "Centro",
      statusPedido: "Ativo",
    },
    {
      id: 2,
      nomePosto: "Posto Norte",
      nomeGerente: "Marcos Lima",
      nomeSupervisor: "Paula Santos",
      regiao: "Norte",
      statusPedido: "Inativo",
    },
    {
      id: 3,
      nomePosto: "Posto Sul",
      nomeGerente: "Roberto Costa",
      nomeSupervisor: "Fernanda Oliveira",
      regiao: "Sul",
      statusPedido: "Ativo",
    },
    {
      id: 4,
      nomePosto: "Posto Leste",
      nomeGerente: "Juliana Melo",
      nomeSupervisor: "Eduardo Ramos",
      regiao: "Leste",
      statusPedido: "Ativo",
    },
    {
      id: 5,
      nomePosto: "Posto Oeste",
      nomeGerente: "Thiago Rocha",
      nomeSupervisor: "Carla Mendes",
      regiao: "Oeste",
      statusPedido: "Inativo",
    },
    {
      id: 6,
      nomePosto: "Posto Horizonte",
      nomeGerente: "Mariana Alves",
      nomeSupervisor: "Leandro Silva",
      regiao: "Centro-Oeste",
      statusPedido: "Ativo",
    },
  ]);

  const handleVoltar = () => navigate("/menu");

  return (
    <div className="lista-postos-container">
      <h1>Lista de Postos</h1>

      <button className="voltar-btn" onClick={handleVoltar}>
        Voltar para Menu
      </button>

      <table className="postos-table">
        <thead>
          <tr>
            <th>Nome do Posto</th>
            <th>Gerente</th>
            <th>Supervisor</th>
            <th>Região</th>
            <th>Status do Pedido</th>
          </tr>
        </thead>
        <tbody>
          {postos.map((posto, idx) => (
            <tr
              key={posto.id}
              className={idx % 2 === 0 ? "linha-par" : "linha-impar"}
            >
              <td>{posto.nomePosto}</td>
              <td>{posto.nomeGerente}</td>
              <td>{posto.nomeSupervisor}</td>
              <td>{posto.regiao}</td>
              <td>
                <span
                  className={`status-bola ${
                    posto.statusPedido === "Ativo" ? "ativo" : "inativo"
                  }`}
                ></span>
                {posto.statusPedido}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
