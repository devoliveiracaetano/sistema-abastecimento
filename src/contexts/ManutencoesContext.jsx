import React, { createContext, useState } from "react";

export const ManutencoesContext = createContext();

export function ManutencoesProvider({ children }) {
  const [manutencoes, setManutencoes] = useState([
    {
      id: 1,
      caminhaoId: 1,
      dataEnvio: "2025-09-10",
      oficina: "Oficina Central",
      gastos: 1500,
      dataSaida: null, // ainda em manutenção
      fotoRecibo: null,
    },
    {
      id: 2,
      caminhaoId: 2,
      dataEnvio: "2025-08-25",
      oficina: "Oficina Sul",
      gastos: 2300,
      dataSaida: "2025-09-05", // manutenção concluída
      fotoRecibo: null,
    },
    {
      id: 3,
      caminhaoId: 3,
      dataEnvio: "2025-09-15",
      oficina: "Oficina Norte",
      gastos: 1800,
      dataSaida: null, // ainda em manutenção
      fotoRecibo: null,
    },
  ]);

  const adicionarManutencao = (manutencao) => {
    setManutencoes((prev) => [...prev, { id: prev.length + 1, ...manutencao }]);
  };

  const atualizarManutencao = (id, dadosAtualizados) => {
    setManutencoes((prev) =>
      prev.map((m) => (m.id === id ? { ...m, ...dadosAtualizados } : m))
    );
  };

  const excluirManutencao = (id) => {
    setManutencoes((prev) => prev.filter((m) => m.id !== id));
  };

  return (
    <ManutencoesContext.Provider
      value={{
        manutencoes,
        adicionarManutencao,
        atualizarManutencao,
        excluirManutencao,
      }}
    >
      {children}
    </ManutencoesContext.Provider>
  );
}
