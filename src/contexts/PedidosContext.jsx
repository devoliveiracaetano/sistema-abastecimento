// src/contexts/PedidosContext.jsx
import React, { createContext, useState } from "react";

export const PedidosContext = createContext();

export function PedidosProvider({ children }) {
  const [pedidos, setPedidos] = useState([
    {
      id: 1,
      dataPedido: "2025-09-20",
      status: "Solicitado",
      posto: "Posto Central",
      produtos: [
        { nome: "Produto A", quantidade: 10 },
        { nome: "Produto B", quantidade: 5 },
      ],
    },
    {
      id: 2,
      dataPedido: "2025-09-19",
      status: "Em rota",
      posto: "Posto Norte",
      produtos: [{ nome: "Produto C", quantidade: 15 }],
    },
  ]);

  // Adiciona um novo pedido
  const adicionarPedido = (pedido) => {
    setPedidos((prev) => [...prev, { id: Date.now(), ...pedido }]);
  };

  // Atualiza um pedido existente
  const atualizarPedido = (id, dadosAtualizados) => {
    setPedidos((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...dadosAtualizados } : p))
    );
  };

  // Exclui um pedido
  const excluirPedido = (id) => {
    setPedidos((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <PedidosContext.Provider
      value={{ pedidos, adicionarPedido, atualizarPedido, excluirPedido }}
    >
      {children}
    </PedidosContext.Provider>
  );
}
