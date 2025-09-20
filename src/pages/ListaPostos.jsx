import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PostosContext } from "../contexts/PostosContext";
import "./ListaPostos.css";

export default function ListaPostos() {
  const navigate = useNavigate();
  const { postos, excluirPosto } = useContext(PostosContext);

  return (
    <div className="lista-postos-container">
      <h1>Lista de Postos</h1>

      <button className="novo-btn" onClick={() => navigate("/cadastro-posto")}>
        Novo Posto
      </button>

      <table className="postos-table">
        <thead>
          <tr>
            <th>Nome do Posto</th>
            <th>Gerente</th>
            <th>Supervisor</th>
            <th>Região</th>
            <th>Status</th>
            <th>Ações</th>
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
                  className={`status-bola ${posto.statusPedido
                    .toLowerCase()
                    .replace(" ", "-")}`}
                ></span>
                {posto.statusPedido}
              </td>
              <td>
                <button onClick={() => navigate(`/cadastro-posto/${posto.id}`)}>
                  Editar
                </button>
                <button onClick={() => excluirPosto(posto.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
