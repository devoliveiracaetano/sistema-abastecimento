// src/pages/CadastroPedidos.jsx
import React, { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PostosContext } from "../contexts/PostosContext";
import { CaminhoesContext } from "../contexts/CaminhoesContext";
import { MotoristasContext } from "../contexts/MotoristasContext";
import { PedidosContext } from "../contexts/PedidosContext";
import "./CadastroPedidos.css";

export default function CadastroPedidos() {
  const navigate = useNavigate();
  const { id } = useParams(); // caso queira editar um pedido existente

  const { postos } = useContext(PostosContext);
  const { caminhoes } = useContext(CaminhoesContext);
  const { motoristas } = useContext(MotoristasContext);
  const { pedidos, adicionarPedido, atualizarPedido } =
    useContext(PedidosContext);

  // Se estiver editando, buscar os dados
  const pedidoExistente = id ? pedidos.find((p) => p.id === Number(id)) : null;

  const [dataPedido, setDataPedido] = useState(
    pedidoExistente
      ? pedidoExistente.dataPedido
      : new Date().toISOString().slice(0, 10)
  );
  const [postoSelecionado, setPostoSelecionado] = useState(
    pedidoExistente ? pedidoExistente.posto : ""
  );
  const [caminhaoSelecionado, setCaminhaoSelecionado] = useState(
    pedidoExistente ? pedidoExistente.caminhao : ""
  );
  const [motoristaSelecionado, setMotoristaSelecionado] = useState(
    pedidoExistente ? pedidoExistente.motorista : ""
  );
  const [produtos, setProdutos] = useState(
    pedidoExistente ? pedidoExistente.produtos : [{ nome: "", quantidade: 0 }]
  );

  const handleProdutoChange = (index, field, value) => {
    const novosProdutos = [...produtos];
    novosProdutos[index][field] = value;
    setProdutos(novosProdutos);
  };

  const adicionarProduto = () => {
    setProdutos([...produtos, { nome: "", quantidade: 0 }]);
  };

  const removerProduto = (index) => {
    setProdutos(produtos.filter((_, i) => i !== index));
  };

  const handleSalvar = () => {
    const novoPedido = {
      dataPedido,
      posto: postoSelecionado,
      caminhao: caminhaoSelecionado,
      motorista: motoristaSelecionado,
      produtos,
      status: "Solicitado",
    };

    if (pedidoExistente) {
      atualizarPedido(pedidoExistente.id, novoPedido);
    } else {
      adicionarPedido(novoPedido);
    }

    navigate("/lista-pedidos");
  };

  return (
    <div className="cadastro-pedidos-container">
      <h1>{pedidoExistente ? "Editar Pedido" : "Cadastro de Pedido"}</h1>

      <div className="form-group">
        <label>Data do Pedido</label>
        <input
          type="date"
          value={dataPedido}
          onChange={(e) => setDataPedido(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Posto</label>
        <select
          value={postoSelecionado}
          onChange={(e) => setPostoSelecionado(e.target.value)}
        >
          <option value="">Selecione o Posto</option>
          {postos.map((p) => (
            <option key={p.id} value={p.nomePosto}>
              {p.nomePosto}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Placa do Caminhão</label>
        <select
          value={caminhaoSelecionado}
          onChange={(e) => setCaminhaoSelecionado(e.target.value)}
        >
          <option value="">Selecione o Caminhão</option>
          {caminhoes.map((c) => (
            <option key={c.placa} value={c.placa}>
              {c.placa} - {c.modelo}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Motorista</label>
        <select
          value={motoristaSelecionado}
          onChange={(e) => setMotoristaSelecionado(e.target.value)}
        >
          <option value="">Selecione o Motorista</option>
          {motoristas.map((m) => (
            <option key={m.id} value={m.nome}>
              {m.nome} ({m.cnh})
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Produtos</label>
        {produtos.map((prod, idx) => (
          <div key={idx} className="produto-item">
            <input
              type="text"
              placeholder="Nome do Produto"
              value={prod.nome}
              onChange={(e) => handleProdutoChange(idx, "nome", e.target.value)}
            />
            <input
              type="number"
              placeholder="Quantidade"
              value={prod.quantidade}
              onChange={(e) =>
                handleProdutoChange(idx, "quantidade", Number(e.target.value))
              }
            />
            <button type="button" onClick={() => removerProduto(idx)}>
              Remover
            </button>
          </div>
        ))}
        <button type="button" onClick={adicionarProduto}>
          Adicionar Produto
        </button>
      </div>

      <button onClick={handleSalvar}>Salvar</button>
      <button onClick={() => navigate("/lista-pedidos")}>Voltar</button>
    </div>
  );
}
