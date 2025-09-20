import React, { createContext, useState } from "react";

export const CaminhoesContext = createContext();

export function CaminhoesProvider({ children }) {
  const [caminhoes, setCaminhoes] = useState([
    {
      id: 1,
      placa: "ABC-1234",
      modelo: "Volvo FH",
      ano: 2020,
      status: "Ativo",
      capacidadeTotal: 8000,
      vencimentoDocumento: "2025-09-28",
      compartimentos: [
        { nome: "Compartimento 1", capacidade: 5000 },
        { nome: "Compartimento 2", capacidade: 3000 },
      ],
    },
    {
      id: 2,
      placa: "DEF-5678",
      modelo: "Mercedes Axor",
      ano: 2019,
      status: "Manutenção",
      capacidadeTotal: 6000,
      vencimentoDocumento: "2025-09-25",
      compartimentos: [
        { nome: "Compartimento 1", capacidade: 4000 },
        { nome: "Compartimento 2", capacidade: 2000 },
      ],
    },
    {
      id: 3,
      placa: "GHI-9012",
      modelo: "Scania R450",
      ano: 2021,
      status: "Ativo",
      capacidadeTotal: 7000,
      vencimentoDocumento: "2025-10-05",
      compartimentos: [
        { nome: "Compartimento 1", capacidade: 3500 },
        { nome: "Compartimento 2", capacidade: 3500 },
      ],
    },
  ]);

  const adicionarCaminhao = (caminhao) => {
    caminhao.id = caminhoes.length + 1;
    setCaminhoes([...caminhoes, caminhao]);
  };

  const excluirCaminhao = (id) => {
    setCaminhoes(caminhoes.filter((c) => c.id !== id));
  };

  return (
    <CaminhoesContext.Provider
      value={{ caminhoes, adicionarCaminhao, excluirCaminhao }}
    >
      {children}
    </CaminhoesContext.Provider>
  );
}
