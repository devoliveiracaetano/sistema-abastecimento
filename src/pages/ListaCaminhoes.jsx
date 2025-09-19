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
            <th>Foto</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {caminhoes.map((c) => (
            <tr key={c.id}>
              <td>{c.placa}</td>
              <td>{c.modelo}</td>
              <td>{c.ano}</td>
              <td>
                <img src={c.foto} alt={c.modelo} className="foto-caminhao" />
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
                  {comp.nome}: {comp.capacidade}
                </li>
              ))}
            </ul>
            <button onClick={handleFecharPopup}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
}
