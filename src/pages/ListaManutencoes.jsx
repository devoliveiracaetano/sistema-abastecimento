// src/pages/ListaManutencoes.jsx
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ManutencoesContext } from "../contexts/ManutencoesContext";
import { CaminhoesContext } from "../contexts/CaminhoesContext";
import "./ListaManutencoes.css";

export default function ListaManutencoes() {
  const navigate = useNavigate();
  const { manutencoes } = useContext(ManutencoesContext);
  const { caminhoes } = useContext(CaminhoesContext);

  const getCaminhao = (id) => caminhoes.find((c) => c.id === id);

  const formatarData = (dataStr) => {
    if (!dataStr) return "";
    const data = new Date(dataStr);
    return data.toLocaleDateString("pt-BR");
  };

  const calcularDias = (dataEnvio, dataSaida) => {
    const inicio = new Date(dataEnvio);
    const fim = dataSaida ? new Date(dataSaida) : new Date();
    const diffTime = fim - inicio;
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const formatarReais = (valor) => {
    if (!valor) return "R$ 0,00";
    return Number(valor).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <div className="lista-manutencoes-container">
      <h1>Manutenções de Caminhões</h1>

      <div className="top-buttons">
        <button onClick={() => navigate("/menu")}>Voltar para Menu</button>
      </div>

      <table className="manutencoes-table">
        <thead>
          <tr>
            <th>Caminhão</th>
            <th>Data Envio</th>
            <th>Oficina</th>
            <th>Gastos</th>
            <th>Data Saída</th>
            <th>Dias em Manutenção</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {manutencoes.map((m) => {
            const caminhao = getCaminhao(m.caminhaoId);
            const status = m.dataSaida ? "Concluído" : "Em Manutenção";
            const dias = calcularDias(m.dataEnvio, m.dataSaida);

            return (
              <tr
                key={m.id}
                className={status === "Em Manutenção" ? "em-manutencao" : ""}
              >
                <td>
                  {caminhao ? `${caminhao.modelo} (${caminhao.placa})` : "N/A"}
                </td>
                <td>{formatarData(m.dataEnvio)}</td>
                <td>{m.oficina}</td>
                <td>{formatarReais(m.gastos)}</td>
                <td>{formatarData(m.dataSaida)}</td>
                <td>{dias}</td>
                <td>
                  <span
                    className={`status-bola ${
                      status === "Em Manutenção" ? "vermelha" : "verde"
                    }`}
                  ></span>
                  {status}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
