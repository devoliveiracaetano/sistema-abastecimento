// src/pages/ListaCaminhoes.jsx
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CaminhoesContext } from "../contexts/CaminhoesContext";
import "./ListaCaminhoes.css";

export default function ListaCaminhoes() {
  const navigate = useNavigate();
  const { caminhoes, excluirCaminhao } = useContext(CaminhoesContext);

  return (
    <div className="lista-caminhoes-container">
      <h1>Lista de Caminhões</h1>

      <button
        className="novo-btn"
        onClick={() => navigate("/cadastro-caminhoes")}
      >
        Novo Caminhão
      </button>

      <table className="caminhoes-table">
        <thead>
          <tr>
            <th>Placa</th>
            <th>Tipo</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Ano Fabricação</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {caminhoes.map((caminhao, idx) => (
            <tr
              key={caminhao.placa}
              className={idx % 2 === 0 ? "linha-par" : "linha-impar"}
            >
              <td>{caminhao.placa}</td>
              <td>{caminhao.tipo || "N/A"}</td>
              <td>{caminhao.marca || "N/A"}</td>
              <td>{caminhao.modelo || "N/A"}</td>
              <td>{caminhao.ano || "N/A"}</td>
              <td>
                <span
                  className={`status-bola ${
                    caminhao.status?.toLowerCase().replace(" ", "-") || "n-a"
                  }`}
                ></span>
                {caminhao.status || "N/A"}
              </td>
              <td>
                <button
                  onClick={() =>
                    navigate(`/cadastro-caminhoes/${caminhao.placa}`)
                  }
                >
                  Editar
                </button>
                <button onClick={() => excluirCaminhao(caminhao.placa)}>
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
