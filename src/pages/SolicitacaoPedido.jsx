import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PostosContext } from "../contexts/PostosContext";
import { PedidosContext } from "../contexts/PedidosContext"; // Import do context
import "./SolicitacaoPedido.css";

export default function SolicitacaoPedido() {
  const navigate = useNavigate();
  const { postos } = useContext(PostosContext);
  const { adicionarPedido } = useContext(PedidosContext); // Função para salvar pedido

  const [dataPedido, setDataPedido] = useState("");
  const [status, setStatus] = useState("Solicitado");
  const [postoId, setPostoId] = useState("");
  const [produtos, setProdutos] = useState([{ nome: "", quantidade: 1 }]);

  const handleProdutoChange = (index, field, value) => {
    const novosProdutos = [...produtos];
    novosProdutos[index][field] = value;
    setProdutos(novosProdutos);
  };

  const adicionarProduto = () => {
    setProdutos([...produtos, { nome: "", quantidade: 1 }]);
  };

  const removerProduto = (index) => {
    setProdutos(produtos.filter((_, i) => i !== index));
  };

  const handleSalvar = () => {
    if (!dataPedido || !postoId || produtos.length === 0) {
      alert("Preencha todos os campos!");
      return;
    }

    adicionarPedido({
      dataPedido,
      status,
      postoId,
      produtos,
    });

    alert("Pedido salvo com sucesso!");
    navigate("/dashboard");
  };

  return (
    <div className="solicitacao-container">
      <h1>Solicitação de Pedido - Posto</h1>

      <div className="form-group">
        <label>Data do Pedido</label>
        <input
          type="date"
          value={dataPedido}
          onChange={(e) => setDataPedido(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Status do Pedido</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Solicitado">Solicitado</option>
          <option value="Pendente">Pendente</option>
          <option value="Programado">Programado</option>
          <option value="Carregando">Carregando</option>
          <option value="Em rota">Em rota</option>
          <option value="Finalizado">Finalizado</option>
        </select>
      </div>

      <div className="form-group">
        <label>Posto</label>
        <select value={postoId} onChange={(e) => setPostoId(e.target.value)}>
          <option value="">Selecione um posto</option>
          {postos.map((p) => (
            <option key={p.id} value={p.id}>
              {p.nomePosto}
            </option>
          ))}
        </select>
      </div>

      <div className="produtos-container">
        <h3>Produtos</h3>
        {produtos.map((p, idx) => (
          <div key={idx} className="produto-item">
            <input
              type="text"
              placeholder="Nome do Produto"
              value={p.nome}
              onChange={(e) => handleProdutoChange(idx, "nome", e.target.value)}
            />
            <input
              type="number"
              min={1}
              placeholder="Quantidade"
              value={p.quantidade}
              onChange={(e) =>
                handleProdutoChange(idx, "quantidade", e.target.value)
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

      <div className="botoes">
        <button onClick={handleSalvar}>Salvar Pedido</button>
        <button onClick={() => navigate("/dashboard")}>Cancelar</button>
      </div>
    </div>
  );
}
