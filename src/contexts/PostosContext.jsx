import React, { createContext, useState } from "react";

export const PostosContext = createContext();

export function PostosProvider({ children }) {
  const [postos, setPostos] = useState([
    {
      id: 1,
      nomePosto: "Posto Central",
      nomeGerente: "Carlos Silva",
      nomeSupervisor: "Ana Souza",
      regiao: "Centro",
      statusPedido: "Ativo",
    },
    {
      id: 2,
      nomePosto: "Posto Norte",
      nomeGerente: "Marcos Lima",
      nomeSupervisor: "Paula Santos",
      regiao: "Norte",
      statusPedido: "Inativo",
    },
    {
      id: 3,
      nomePosto: "Posto Sul",
      nomeGerente: "Roberto Costa",
      nomeSupervisor: "Fernanda Oliveira",
      regiao: "Sul",
      statusPedido: "Ativo",
    },
  ]);

  const adicionarPosto = (novoPosto) => {
    setPostos((prev) => [...prev, { id: Date.now(), ...novoPosto }]);
  };

  const atualizarPosto = (id, dadosAtualizados) => {
    setPostos((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...dadosAtualizados } : p))
    );
  };

  const excluirPosto = (id) => {
    setPostos((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <PostosContext.Provider
      value={{ postos, adicionarPosto, atualizarPosto, excluirPosto }}
    >
      {children}
    </PostosContext.Provider>
  );
}
