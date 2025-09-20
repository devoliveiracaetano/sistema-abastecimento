import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PedidosContext } from "../contexts/PedidosContext";
import "./ListaPedidos.css"; // Novo CSS

export default function ListaPedidos() {
  const navigate = useNavigate();
  const { pedidos, excluirPedido } = useContext(PedidosContext);

  const getStatusClass = (status) =>
    status?.toLowerCase().replace(" ", "-") || "n-a";

  return (
    <div className="lista-pedidos-container">
      <h1>Lista de Pedidos</h1>

      <button
        className="novo-btn"
        onClick={() => navigate("/cadastro-pedidos")}
      >
        Novo Pedido
      </button>

      <table className="pedidos-table">
        <thead>
          <tr>
            <th>Data Pedido</th>
            <th>Status</th>
            <th>Posto</th>
            <th>Produtos</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map((p, idx) => (
            <tr key={p.id}>
              <td>{p.dataPedido}</td>
              <td>
                <span
                  className={`status-bola ${getStatusClass(p.status)}`}
                ></span>
                {p.status}
              </td>
              <td>{p.posto}</td>
              <td>
                {p.produtos.map((pr, i) => (
                  <div key={i}>
                    {pr.nome} ({pr.quantidade})
                  </div>
                ))}
              </td>
              <td>
                <button onClick={() => navigate(`/cadastro-pedidos/${p.id}`)}>
                  Editar
                </button>
                <button onClick={() => excluirPedido(p.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
