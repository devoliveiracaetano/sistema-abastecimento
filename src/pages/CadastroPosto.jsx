// src/pages/CadastroPosto.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CadastroPosto.css";

export default function CadastroPosto() {
  const navigate = useNavigate();

  // Dados mockados iniciais
  const [postos, setPostos] = useState([
    {
      id: 1,
      nome: "Posto Central",
      gerente: "Carlos Silva",
      supervisor: "Ana Souza",
      regiao: "Centro",
      statusPedido: "Ativo",
    },
    {
      id: 2,
      nome: "Posto Norte",
      gerente: "Marcos Lima",
      supervisor: "Juliana Costa",
      regiao: "Norte",
      statusPedido: "Pendente",
    },
    {
      id: 3,
      nome: "Posto Sul",
      gerente: "Fernanda Rocha",
      supervisor: "Rafael Dias",
      regiao: "Sul",
      statusPedido: "Ativo",
    },
    {
      id: 4,
      nome: "Posto Leste",
      gerente: "Paulo Mendes",
      supervisor: "Carla Pinto",
      regiao: "Leste",
      statusPedido: "Em Análise",
    },
    {
      id: 5,
      nome: "Posto Oeste",
      gerente: "Renato Alves",
      supervisor: "Simone Martins",
      regiao: "Oeste",
      statusPedido: "Ativo",
    },
    {
      id: 6,
      nome: "Posto Expresso",
      gerente: "Luciana Freitas",
      supervisor: "Diego Oliveira",
      regiao: "Centro",
      statusPedido: "Pendente",
    },
  ]);

  const [novoPosto, setNovoPosto] = useState({
    nome: "",
    gerente: "",
    supervisor: "",
    regiao: "",
    statusPedido: "Ativo",
  });

  const handleChange = (e) => {
    setNovoPosto({ ...novoPosto, [e.target.name]: e.target.value });
  };

  const handleSalvar = () => {
    if (
      !novoPosto.nome ||
      !novoPosto.gerente ||
      !novoPosto.supervisor ||
      !novoPosto.regiao
    ) {
      alert("Preencha todos os campos!");
      return;
    }
    setPostos([...postos, { ...novoPosto, id: Date.now() }]);
    setNovoPosto({
      nome: "",
      gerente: "",
      supervisor: "",
      regiao: "",
      statusPedido: "Ativo",
    });
  };

  return (
    <div className="cadastro-posto-container">
      <h1>Cadastro de Postos</h1>

      <div className="form-cadastro">
        <input
          type="text"
          name="nome"
          placeholder="Nome do Posto"
          value={novoPosto.nome}
          onChange={handleChange}
        />
        <input
          type="text"
          name="gerente"
          placeholder="Nome do Gerente"
          value={novoPosto.gerente}
          onChange={handleChange}
        />
        <input
          type="text"
          name="supervisor"
          placeholder="Nome do Supervisor"
          value={novoPosto.supervisor}
          onChange={handleChange}
        />
        <input
          type="text"
          name="regiao"
          placeholder="Região"
          value={novoPosto.regiao}
          onChange={handleChange}
        />
        <select
          name="statusPedido"
          value={novoPosto.statusPedido}
          onChange={handleChange}
        >
          <option value="Ativo">Ativo</option>
          <option value="Pendente">Pendente</option>
          <option value="Em Análise">Em Análise</option>
        </select>
        <div className="botoes">
          <button onClick={handleSalvar}>Salvar</button>
          <button onClick={() => navigate("/menu")}>Voltar</button>
        </div>
      </div>

      <h2>Lista de Postos</h2>
      <table className="postos-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Gerente</th>
            <th>Supervisor</th>
            <th>Região</th>
            <th>Status de Pedido</th>
          </tr>
        </thead>
        <tbody>
          {postos.map((p) => (
            <tr key={p.id}>
              <td>{p.nome}</td>
              <td>{p.gerente}</td>
              <td>{p.supervisor}</td>
              <td>{p.regiao}</td>
              <td>{p.statusPedido}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
