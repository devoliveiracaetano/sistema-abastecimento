import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PostosContext } from "../contexts/PostosContext";
import "./CadastroPosto.css";

export default function CadastroPosto() {
  const navigate = useNavigate();
  const { id } = useParams(); // para edição
  const { postos, adicionarPosto, atualizarPosto } = useContext(PostosContext);

  const postoExistente = id ? postos.find((p) => p.id === Number(id)) : null;

  const [posto, setPosto] = useState(
    postoExistente || {
      nomePosto: "",
      nomeGerente: "",
      nomeSupervisor: "",
      regiao: "",
      statusPedido: "Ativo",
    }
  );

  const handleChange = (e) => {
    setPosto({ ...posto, [e.target.name]: e.target.value });
  };

  const handleSalvar = () => {
    if (
      !posto.nomePosto ||
      !posto.nomeGerente ||
      !posto.nomeSupervisor ||
      !posto.regiao
    ) {
      alert("Preencha todos os campos!");
      return;
    }

    if (postoExistente) {
      atualizarPosto(posto.id, posto);
    } else {
      adicionarPosto(posto);
    }

    navigate("/lista-postos");
  };

  return (
    <div className="cadastro-posto-container">
      <h1>{postoExistente ? "Editar Posto" : "Cadastro de Posto"}</h1>

      <div className="form-cadastro">
        <input
          type="text"
          name="nomePosto"
          placeholder="Nome do Posto"
          value={posto.nomePosto}
          onChange={handleChange}
        />
        <input
          type="text"
          name="nomeGerente"
          placeholder="Nome do Gerente"
          value={posto.nomeGerente}
          onChange={handleChange}
        />
        <input
          type="text"
          name="nomeSupervisor"
          placeholder="Nome do Supervisor"
          value={posto.nomeSupervisor}
          onChange={handleChange}
        />
        <input
          type="text"
          name="regiao"
          placeholder="Região"
          value={posto.regiao}
          onChange={handleChange}
        />
        <select
          name="statusPedido"
          value={posto.statusPedido}
          onChange={handleChange}
        >
          <option value="Ativo">Ativo</option>
          <option value="Inativo">Inativo</option>
          <option value="Em Análise">Em Análise</option>
        </select>

        <div className="botoes">
          <button onClick={handleSalvar}>
            {postoExistente ? "Atualizar" : "Salvar"}
          </button>
          <button onClick={() => navigate("/lista-postos")}>Voltar</button>
        </div>
      </div>
    </div>
  );
}
