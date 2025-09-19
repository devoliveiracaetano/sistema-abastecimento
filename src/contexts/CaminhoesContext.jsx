import React, { createContext, useState } from "react";

// Cria o contexto
export const CaminhoesContext = createContext();

// Provider do contexto
export function CaminhoesProvider({ children }) {
  const [caminhoes, setCaminhoes] = useState([
    {
      id: 1,
      placa: "ABC-1234",
      modelo: "Volvo FH",
      ano: 2020,
      foto: "caminhao1.jpg",
      compartimentos: [
        { nome: "Compartimento 1", capacidade: "5000 litros" },
        { nome: "Compartimento 2", capacidade: "3000 litros" },
      ],
    },
    {
      id: 2,
      placa: "DEF-5678",
      modelo: "Scania R450",
      ano: 2021,
      foto: "caminhao2.jpg",
      compartimentos: [
        { nome: "Compartimento 1", capacidade: "4000 litros" },
        { nome: "Compartimento 2", capacidade: "2500 litros" },
      ],
    },
  ]);

  // Função para adicionar caminhão
  const adicionarCaminhao = (caminhao) => {
    const novoCaminhao = { ...caminhao, id: Date.now() };
    setCaminhoes((prev) => [...prev, novoCaminhao]);
  };

  // Função para excluir caminhão
  const excluirCaminhao = (id) => {
    setCaminhoes((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <CaminhoesContext.Provider
      value={{ caminhoes, adicionarCaminhao, excluirCaminhao }}
    >
      {children}
    </CaminhoesContext.Provider>
  );
}
