import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CaminhoesContext } from "../contexts/CaminhoesContext";
import "./CadastroCaminhoes.css";

export default function CadastroCaminhoes() {
  const navigate = useNavigate();
  const { adicionarCaminhao } = useContext(CaminhoesContext);

  const [placa, setPlaca] = useState("");
  const [modelo, setModelo] = useState("");
  const [ano, setAno] = useState("");
  const [status, setStatus] = useState("Ativo");
  const [vencimentoDoc, setVencimentoDoc] = useState("");
  const [compartimentos, setCompartimentos] = useState([
    { nome: "Compartimento 1", capacidade: 0 },
  ]);

  const capacidadeTotal = compartimentos.reduce(
    (acc, c) => acc + Number(c.capacidade),
    0
  );

  const handleSalvar = () => {
    const novoCaminhao = {
      placa,
      modelo,
      ano,
      status,
      vencimentoDoc,
      capacidadeTotal,
      compartimentos,
    };
    adicionarCaminhao(novoCaminhao);
    navigate("/lista-caminhoes");
  };

  const adicionarCompartimento = () => {
    setCompartimentos([
      ...compartimentos,
      { nome: `Compartimento ${compartimentos.length + 1}`, capacidade: 0 },
    ]);
  };

  return (
    <div className="cadastro-caminhoes-container">
      <h1>Cadastro de Caminhão</h1>

      <div className="form-group">
        <label>Placa</label>
        <input value={placa} onChange={(e) => setPlaca(e.target.value)} />
      </div>

      <div className="form-group">
        <label>Modelo</label>
        <input value={modelo} onChange={(e) => setModelo(e.target.value)} />
      </div>

      <div className="form-group">
        <label>Ano</label>
        <input value={ano} onChange={(e) => setAno(e.target.value)} />
      </div>

      <div className="form-group">
        <label>Status de Manutenção</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Ativo">Ativo</option>
          <option value="Em Manutenção">Em Manutenção</option>
        </select>
      </div>

      <div className="form-group">
        <label>Vencimento Documento</label>
        <input
          type="date"
          value={vencimentoDoc}
          onChange={(e) => setVencimentoDoc(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Compartimentos</label>
        {compartimentos.map((c, i) => (
          <div key={i}>
            <span>{c.nome}</span>
            <input
              type="number"
              value={c.capacidade}
              onChange={(e) => {
                const novos = [...compartimentos];
                novos[i].capacidade = e.target.value;
                setCompartimentos(novos);
              }}
            />
          </div>
        ))}
        <button onClick={adicionarCompartimento}>
          Adicionar Compartimento
        </button>
      </div>

      <div className="form-group">
        <label>Capacidade Total</label>
        <input value={capacidadeTotal} readOnly />
      </div>

      <button onClick={handleSalvar}>Salvar</button>
      <button onClick={() => navigate("/menu")}>Voltar para Menu</button>
    </div>
  );
}
