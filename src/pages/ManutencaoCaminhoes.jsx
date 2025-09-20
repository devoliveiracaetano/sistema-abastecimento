// src/pages/ManutencaoCaminhoes.jsx
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CaminhoesContext } from "../contexts/CaminhoesContext";
import { ManutencoesContext } from "../contexts/ManutencoesContext";
import "./ManutencaoCaminhoes.css";

export default function ManutencaoCaminhoes() {
  const navigate = useNavigate();
  const { caminhoes } = useContext(CaminhoesContext);
  const { adicionarManutencao } = useContext(ManutencoesContext); // Corrigido aqui

  const [caminhaoId, setCaminhaoId] = useState("");
  const [dataEnvio, setDataEnvio] = useState("");
  const [dataSaida, setDataSaida] = useState("");
  const [oficina, setOficina] = useState("");
  const [gastos, setGastos] = useState("");
  const [fotosRecibos, setFotosRecibos] = useState([]);
  const [salvo, setSalvo] = useState(false);

  const handleFotosChange = (e) => {
    if (e.target.files) {
      const urls = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setFotosRecibos(urls);
    }
  };

  const handleSalvar = () => {
    if (!caminhaoId || !dataEnvio || !dataSaida) {
      alert("Preencha todos os campos obrigatórios!");
      return;
    }

    const diasManutencao =
      (new Date(dataSaida) - new Date(dataEnvio)) / (1000 * 60 * 60 * 24);

    const manutencao = {
      id: Date.now(),
      caminhaoId,
      dataEnvio,
      dataSaida,
      oficina,
      gastos,
      fotosRecibos,
      diasManutencao,
    };

    adicionarManutencao(manutencao);
    setSalvo(true);
    setTimeout(() => {
      setSalvo(false);
      navigate("/lista-manutencoes");
    }, 1500);
  };

  return (
    <div className="manutencao-container">
      <h1>Cadastro de Manutenção de Caminhão</h1>

      <div className="form-group">
        <label>Caminhão</label>
        <select
          value={caminhaoId}
          onChange={(e) => setCaminhaoId(e.target.value)}
        >
          <option value="">Selecione o caminhão</option>
          {caminhoes.map((c) => (
            <option key={c.id} value={c.id}>
              {c.modelo} ({c.placa})
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Data de Envio para Manutenção</label>
        <input
          type="date"
          value={dataEnvio}
          onChange={(e) => setDataEnvio(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Data de Saída da Oficina</label>
        <input
          type="date"
          value={dataSaida}
          onChange={(e) => setDataSaida(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Oficina Responsável</label>
        <input
          type="text"
          value={oficina}
          onChange={(e) => setOficina(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Gastos da Manutenção</label>
        <input
          type="number"
          value={gastos}
          onChange={(e) => setGastos(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Fotos de Recibos</label>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleFotosChange}
        />
        <div className="fotos-preview">
          {fotosRecibos.map((f, idx) => (
            <img key={idx} src={f} alt={`Recibo ${idx}`} />
          ))}
        </div>
      </div>

      <div className="form-buttons">
        <button onClick={handleSalvar}>Salvar</button>
        <button onClick={() => navigate("/menu")}>Voltar</button>
      </div>

      {salvo && (
        <div className="mensagem-sucesso">Registro salvo com sucesso!</div>
      )}
    </div>
  );
}
