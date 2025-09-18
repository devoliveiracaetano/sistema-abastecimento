import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./InformacoesCarga.css";

export default function InformacoesCarga() {
  const navigate = useNavigate();

  const [placa, setPlaca] = useState("");
  const [motorista, setMotorista] = useState("");
  const [posto, setPosto] = useState("");
  const [produto, setProduto] = useState("");
  const [foto, setFoto] = useState(null);
  const [salvo, setSalvo] = useState(false);

  const motoristasMock = [
    "João Silva",
    "Maria Souza",
    "Carlos Pereira",
    "Ana Lima",
    "Pedro Santos",
  ];
  const postosMock = [
    "Posto Central",
    "Posto Sul",
    "Posto Norte",
    "Posto Leste",
    "Posto Oeste",
  ];
  const produtosMock = [
    "Diesel",
    "Gasolina",
    "Etanol",
    "Querosene",
    "Óleo Lubrificante",
  ];

  const handleFotoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFoto(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSalvar = () => {
    // Aqui você pode enviar para API
    setSalvo(true);
    setTimeout(() => {
      setSalvo(false);
      navigate("/lista-cargas"); // volta para lista
    }, 5000); // mensagem por 5 segundos
  };

  return (
    <div className="informacoes-carga-container">
      <h1>Informações de Carga</h1>

      <div className="form-group">
        <label>Placa do Veículo</label>
        <input
          type="text"
          value={placa}
          onChange={(e) => setPlaca(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Motorista</label>
        <input
          type="text"
          value={motorista}
          onChange={(e) => setMotorista(e.target.value)}
          list="motoristas"
        />
        <datalist id="motoristas">
          {motoristasMock.map((m, i) => (
            <option key={i} value={m} />
          ))}
        </datalist>
      </div>

      <div className="form-group">
        <label>Posto</label>
        <input
          type="text"
          value={posto}
          onChange={(e) => setPosto(e.target.value)}
          list="postos"
        />
        <datalist id="postos">
          {postosMock.map((p, i) => (
            <option key={i} value={p} />
          ))}
        </datalist>
      </div>

      <div className="form-group">
        <label>Produto Carregado</label>
        <select value={produto} onChange={(e) => setProduto(e.target.value)}>
          <option value="">Selecione o produto</option>
          {produtosMock.map((prod, i) => (
            <option key={i} value={prod}>
              {prod}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Foto com Horário de Carregamento</label>
        <input type="file" accept="image/*" onChange={handleFotoChange} />
        {foto && <img src={foto} alt="Carga" className="foto-carga" />}
      </div>

      <button className="salvar-btn" onClick={handleSalvar}>
        Salvar
      </button>

      {salvo && (
        <div className="mensagem-sucesso">Carga salva com sucesso!</div>
      )}
    </div>
  );
}
