import React, { useContext } from "react";
import { FaTruck, FaBuilding, FaRoad, FaCheckCircle } from "react-icons/fa";
import { CaminhoesContext } from "../contexts/CaminhoesContext";
import { ManutencoesContext } from "../contexts/ManutencoesContext";
import { PostosContext } from "../contexts/PostosContext";
import { PedidosContext } from "../contexts/PedidosContext";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./Dashboard.css";

export default function Dashboard() {
  const { manutencoes } = useContext(ManutencoesContext);
  const { postos } = useContext(PostosContext);
  const { pedidos } = useContext(PedidosContext);

  const caminhõesEmManutencao = manutencoes.filter((m) => !m.dataSaida).length;
  const totalPostos = postos.length;
  const pedidosEmRota = pedidos.filter((p) => p.status === "Em rota").length;
  const pedidosFinalizados = pedidos.filter(
    (p) => p.status === "Finalizado"
  ).length;

  const statusCounts = pedidos.reduce((acc, p) => {
    acc[p.status] = (acc[p.status] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.entries(statusCounts).map(([status, count]) => ({
    status,
    count,
  }));

  const cards = [
    {
      title: "Caminhões em Manutenção",
      value: caminhõesEmManutencao,
      color: "#e74c3c",
      icon: <FaTruck size={40} />,
    },
    {
      title: "Total de Postos",
      value: totalPostos,
      color: "#3498db",
      icon: <FaBuilding size={40} />,
    },
    {
      title: "Pedidos em Rota",
      value: pedidosEmRota,
      color: "#f39c12",
      icon: <FaRoad size={40} />,
    },
    {
      title: "Pedidos Finalizados",
      value: pedidosFinalizados,
      color: "#2ecc71",
      icon: <FaCheckCircle size={40} />,
    },
  ];

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>

      <div className="cards-container">
        {cards.map((card) => (
          <div
            key={card.title}
            className="dashboard-card"
            style={{ backgroundColor: card.color }}
          >
            <div className="card-icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.value}</p>
          </div>
        ))}
      </div>

      <h2>Status dos Pedidos</h2>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="status" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="count" fill="#3498db" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
