// src/pages/CadastroPedidos.jsx
import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PedidosContext } from "../contexts/PedidosContext";
import { PostosContext } from "../contexts/PostosContext";
import { CaminhoesContext } from "../contexts/CaminhoesContext";
import { MotoristasContext } from "../contexts/MotoristasContext";
import "./CadastroPedidos.css";

export default function CadastroPedidos() {
  const navigate = useNavigate();
  const { id } = useParams(); // caso seja edição
  const { pedidos, adicionarPedido, atualizarPedido } =
    useContext(PedidosContext);
  const { postos } = useContext(PostosContext);
  const { caminhoes } = useContext(CaminhoesContext);
  const { motoristas } = useContext(MotoristasContext);

  const [dataPedido, setDataPedido] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [postoSelecionado, setPostoSelecionado] = useState("");
  const [caminhaoSelecionado, setCaminhaoSelecionado] = useState(null);
  const [motoristaSelecionado, setMotoristaSelecionado] = useState("");

  // Função para gerar os compartimentos com número e status 🔴 Vazio
  const gerarCompartimentos = (caminhao) => {
    const capacidadeNumerica = parseFloat(
      caminhao.capacidadeVol.replace(/[^\d,.]/g, "").replace(",", ".")
    );

    return [...Array(caminhao.compartimentos)].map((_, index) => ({
      id: index + 1,
      nome: index + 1, // apenas o número
      capacidade: capacidadeNumerica / caminhao.compartimentos, // opcional
      produto: "",
      quantidade: "",
      status: "🔴 Vazio", // bolinha vermelha + Vazio
    }));
  };

  // Atualiza a tabela de compartimentos quando o caminhão muda
  const handleCaminhaoChange = (placa) => {
    const caminhao = caminhoes.find((c) => c.placa === placa);
    if (!caminhao) return;

    setCaminhaoSelecionado({
      ...caminhao,
      compartimentos: gerarCompartimentos(caminhao),
    });
  };

  // Atualiza a tabela quando o motorista muda
  useEffect(() => {
    if (!motoristaSelecionado) return;

    const motorista = motoristas.find(
      (m) => m.id === parseInt(motoristaSelecionado)
    );
    if (!motorista || !motorista.placaCaminhao) {
      setCaminhaoSelecionado(null);
      return;
    }

    const caminhao = caminhoes.find((c) => c.placa === motorista.placaCaminhao);
    if (!caminhao) {
      setCaminhaoSelecionado(null);
      return;
    }

    setCaminhaoSelecionado({
      ...caminhao,
      compartimentos: gerarCompartimentos(caminhao),
    });
  }, [motoristaSelecionado, motoristas, caminhoes]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!postoSelecionado || !caminhaoSelecionado || !motoristaSelecionado) {
      alert("Selecione todos os campos obrigatórios.");
      return;
    }

    const novoPedido = {
      dataPedido,
      posto: postos.find((p) => p.id === parseInt(postoSelecionado)).nomePosto,
      caminhao: caminhaoSelecionado.placa,
      motorista: motoristas.find((m) => m.id === parseInt(motoristaSelecionado))
        .nome,
      produtos: caminhaoSelecionado.compartimentos.map((c) => ({
        compartimento: c.nome,
        capacidade: c.capacidade,
        produto: c.produto,
        quantidade: c.quantidade,
      })),
      status: "Solicitado",
    };

    if (id) {
      atualizarPedido(parseInt(id), novoPedido);
    } else {
      adicionarPedido(novoPedido);
    }

    navigate("/lista-pedidos");
  };

  return (
    <div className="cadastro-pedidos-container">
      <h1>{id ? "Editar Pedido" : "Cadastro de Pedido"}</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Data do Pedido:</label>
          <input
            type="date"
            value={dataPedido}
            onChange={(e) => setDataPedido(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Posto:</label>
          <select
            value={postoSelecionado}
            onChange={(e) => setPostoSelecionado(e.target.value)}
            required
          >
            <option value="">Selecione o posto</option>
            {postos.map((p) => (
              <option key={p.id} value={p.id}>
                {p.nomePosto}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Caminhão:</label>
          <select
            value={caminhaoSelecionado?.placa || ""}
            onChange={(e) => handleCaminhaoChange(e.target.value)}
            required
          >
            <option value="">Selecione o caminhão</option>
            {caminhoes.map((c) => (
              <option key={c.placa} value={c.placa}>
                {c.placa}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Motorista:</label>
          <select
            value={motoristaSelecionado}
            onChange={(e) => setMotoristaSelecionado(e.target.value)}
            required
          >
            <option value="">Selecione o motorista</option>
            {motoristas.map((m) => (
              <option key={m.id} value={m.id}>
                {m.nome}
              </option>
            ))}
          </select>
        </div>

        {caminhaoSelecionado && (
          <div className="compartimentos-table-wrapper">
            <h3>
              Compartimentos do caminhão {caminhaoSelecionado.placa} -
              Capacidade total: {caminhaoSelecionado.capacidadeVol}
            </h3>
            <table className="compartimentos-table">
              <thead>
                <tr>
                  <th>Status</th>
                  <th>Compartimento</th>
                  <th>Capacidade</th>
                  <th>Produto</th>
                  <th>Quantidade</th>
                </tr>
              </thead>
              <tbody>
                {caminhaoSelecionado.compartimentos.map((c) => (
                  <tr key={c.id}>
                    <td>{c.status}</td>
                    <td>{c.nome}</td>
                    <td>{c.capacidade.toFixed(2)}</td>
                    <td>{""}</td>
                    <td>{""}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <button type="submit" className="submit-btn">
          {id ? "Atualizar Pedido" : "Cadastrar Pedido"}
        </button>
      </form>
    </div>
  );
}
