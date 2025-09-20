import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CaminhoesContext } from "../contexts/CaminhoesContext";
import "./ListaCaminhoes.css";

export default function ListaCaminhoes() {
  const navigate = useNavigate();
  const { caminhoes, excluirCaminhao } = useContext(CaminhoesContext);
  const [selectedCaminhao, setSelectedCaminhao] = useState(null);

  const handleNovo = () => navigate("/cadastro-caminhoes");
  const handleVoltar = () => navigate("/menu");
  const handleDetalhes = (c) => setSelectedCaminhao(c);
  const handleFecharPopup = () => setSelectedCaminhao(null);

  const isVencimentoProximo = (vencimento) => {
    const hoje = new Date();
    const dataVenc = new Date(vencimento);
    const diffDias = Math.ceil((dataVenc - hoje) / (1000 * 60 * 60 * 24));
    return diffDias <= 10;
  };

  const formatarDataBR = (data) => {
    const d = new Date(data);
    return d.toLocaleDateString("pt-BR");
  };

  return (
    <div className="lista-caminhoes-container">
      <h1>Lista de Caminhões</h1>
      <div className="top-buttons">
        <button className="novo-btn" onClick={handleNovo}>
          Novo Caminhão
        </button>
        <button className="voltar-btn" onClick={handleVoltar}>
          Voltar para Menu
        </button>
      </div>

      <table className="caminhoes-table">
        <thead>
          <tr>
            <th>Placa</th>
            <th>Modelo</th>
            <th>Ano</th>
            <th>Status</th>
            <th>Capacidade Total</th>
            <th>Vencimento Documento</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {caminhoes.map((c, idx) => (
            <tr
              key={c.id}
              className={idx % 2 === 0 ? "linha-par" : "linha-impar"}
            >
              <td>{c.placa}</td>
              <td>{c.modelo}</td>
              <td>{c.ano}</td>
              <td className="status-cell">
                <span
                  className={`status-bola ${
                    c.status === "Ativo" ? "ativo" : "manutencao"
                  }`}
                ></span>
                {c.status}
              </td>
              <td>{c.capacidadeTotal} L</td>
              <td
                className={
                  isVencimentoProximo(c.vencimentoDocumento)
                    ? "vencimento-proximo"
                    : ""
                }
              >
                {formatarDataBR(c.vencimentoDocumento)}
              </td>
              <td>
                <button onClick={() => handleDetalhes(c)}>Detalhes</button>
                <button onClick={() => excluirCaminhao(c.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedCaminhao && (
        <div className="popup">
          <div className="popup-content">
            <h2>Compartimentos de {selectedCaminhao.modelo}</h2>
            <ul>
              {selectedCaminhao.compartimentos.map((comp, idx) => (
                <li key={idx}>
                  {comp.nome}: {comp.capacidade} L
                </li>
              ))}
            </ul>
            <p>
              <strong>Capacidade Total:</strong>{" "}
              {selectedCaminhao.capacidadeTotal} L
            </p>
            <button onClick={handleFecharPopup}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
}
