import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CaminhoesContext } from "../contexts/CaminhoesContext";
import { ManutencoesContext } from "../contexts/ManutencoesContext";
import { PostosContext } from "../contexts/PostosContext";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

import "./Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();

  // Garantindo valores default caso contextos ainda não tenham dados
  const { caminhões = [] } = useContext(CaminhoesContext) || {};
  const { manutencoes = [] } = useContext(ManutencoesContext) || {};
  const { postos = [] } = useContext(PostosContext) || {};

  // Caminhões em manutenção
  const manutencaoAtiva = manutencoes.filter((m) => !m.dataSaida).length;

  // Dados para gráfico de barras
  const dadosCaminhoes = [
    { name: "Em manutenção", qtd: manutencaoAtiva },
    { name: "Disponíveis", qtd: caminhões.length - manutencaoAtiva },
  ];

  // Contando postos por status
  const postosAtivos = postos.filter((p) => p.statusPedido === "Ativo").length;
  const postosPendentes = postos.filter(
    (p) => p.statusPedido === "Pendente"
  ).length;
  const postosAnalise = postos.filter(
    (p) => p.statusPedido === "Em Análise"
  ).length;

  const dadosPostos = [
    { name: "Ativos", value: postosAtivos },
    { name: "Pendentes", value: postosPendentes },
    { name: "Em Análise", value: postosAnalise },
  ];

  const coresPostos = ["#2ecc71", "#f1c40f", "#e74c3c"];

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <p>Resumo visual do sistema:</p>

      <div className="dashboard-cards">
        {/* Caminhões */}
        <div className="dashboard-card">
          <h3>Caminhões</h3>
          <BarChart width={200} height={150} data={dadosCaminhoes}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="qtd" fill="#3498db" />
          </BarChart>
          <button onClick={() => navigate("/lista-manutencoes")}>
            Ver detalhes
          </button>
        </div>

        {/* Postos */}
        <div className="dashboard-card">
          <h3>Postos</h3>
          <PieChart width={200} height={150}>
            <Pie
              data={dadosPostos}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={50}
              label
            >
              {dadosPostos.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={coresPostos[index]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </div>
    </div>
  );
}
