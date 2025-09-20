import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PedidosContext } from "../contexts/PedidosContext";

export default function CadastroPedidos() {
  const navigate = useNavigate();
  const { adicionarPedido } = useContext(PedidosContext);

  const [pedido, setPedido] = useState({
    dataPedido: "",
    status: "Solicitado",
    posto: "",
    produtos: [{ nome: "", quantidade: 0 }],
  });

  const handleProdutoChange = (index, field, value) => {
    const novosProdutos = [...pedido.produtos];
    novosProdutos[index][field] = value;
    setPedido({ ...pedido, produtos: novosProdutos });
  };

  const adicionarProduto = () => {
    setPedido({
      ...pedido,
      produtos: [...pedido.produtos, { nome: "", quantidade: 0 }],
    });
  };

  const handleSalvar = () => {
    adicionarPedido(pedido);
    navigate("/lista-pedidos");
  };

  return (
    <div>
      <h1>Cadastro de Pedido</h1>
      <input
        type="date"
        value={pedido.dataPedido}
        onChange={(e) => setPedido({ ...pedido, dataPedido: e.target.value })}
      />
      <select
        value={pedido.status}
        onChange={(e) => setPedido({ ...pedido, status: e.target.value })}
      >
        <option value="Solicitado">Solicitado</option>
        <option value="Pendente">Pendente</option>
        <option value="Programado">Programado</option>
        <option value="Carregando">Carregando</option>
        <option value="Em rota">Em rota</option>
        <option value="Finalizado">Finalizado</option>
      </select>
      <input
        type="text"
        placeholder="Posto"
        value={pedido.posto}
        onChange={(e) => setPedido({ ...pedido, posto: e.target.value })}
      />
      <h3>Produtos</h3>
      {pedido.produtos.map((p, i) => (
        <div key={i}>
          <input
            placeholder="Nome do Produto"
            value={p.nome}
            onChange={(e) => handleProdutoChange(i, "nome", e.target.value)}
          />
          <input
            type="number"
            placeholder="Quantidade"
            value={p.quantidade}
            onChange={(e) =>
              handleProdutoChange(i, "quantidade", e.target.value)
            }
          />
        </div>
      ))}
      <button onClick={adicionarProduto}>Adicionar Produto</button>
      <button onClick={handleSalvar}>Salvar Pedido</button>
    </div>
  );
}
