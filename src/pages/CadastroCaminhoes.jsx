import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CaminhoesContext } from "../contexts/CaminhoesContext";
import "./CadastroCaminhoes.css";

export default function CadastroCaminhoes() {
  const navigate = useNavigate();
  const { adicionarCaminhao } = useContext(CaminhoesContext);

  const [nome, setNome] = useState("");
  const [placa, setPlaca] = useState("");
  const [compartimentos, setCompartimentos] = useState([
    { id: 1, capacidade: "" },
  ]);
  const [salvo, setSalvo] = useState(false);

  const handleCompartimentoChange = (id, value) => {
    setCompartimentos(
      compartimentos.map((c) => (c.id === id ? { ...c, capacidade: value } : c))
    );
  };

  const adicionarCompartimento = () => {
    const novoId = compartimentos.length + 1;
    setCompartimentos([...compartimentos, { id: novoId, capacidade: "" }]);
  };

  const handleSalvar = () => {
    if (!nome || !placa) {
      alert("Preencha nome e placa do caminhão.");
      return;
    }

    const novoCaminhao = {
      id: Date.now(),
      nome,
      placa,
      compartimentos,
    };

    adicionarCaminhao(novoCaminhao);
    setSalvo(true);

    setTimeout(() => {
      setSalvo(false);
      navigate("/menu");
    }, 2000); // mensagem de 2 segundos
  };

  const handleVoltar = () => {
    navigate("/menu");
  };

  return (
    <div className="cadastro-caminhoes-container">
      <h1>Cadastro de Caminhões</h1>

      <div className="form-group">
        <label>Nome do Caminhão</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Placa</label>
        <input
          type="text"
          value={placa}
          onChange={(e) => setPlaca(e.target.value)}
        />
      </div>

      <h2>Compartimentos</h2>
      {compartimentos.map((c) => (
        <div key={c.id} className="form-group">
          <label>Compartimento {c.id} (litros)</label>
          <input
            type="number"
            value={c.capacidade}
            onChange={(e) => handleCompartimentoChange(c.id, e.target.value)}
          />
        </div>
      ))}

      <button className="add-comp-btn" onClick={adicionarCompartimento}>
        Adicionar Compartimento
      </button>

      <div className="buttons">
        <button className="salvar-btn" onClick={handleSalvar}>
          Salvar
        </button>
        <button className="voltar-btn" onClick={handleVoltar}>
          Voltar
        </button>
      </div>

      {salvo && (
        <div className="mensagem-sucesso">Caminhão salvo com sucesso!</div>
      )}
    </div>
  );
}
