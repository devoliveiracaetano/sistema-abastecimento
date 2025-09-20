import React, { createContext, useState } from "react";

export const MotoristasContext = createContext();

export function MotoristasProvider({ children }) {
  const [motoristas, setMotoristas] = useState([
    {
      id: 1,
      nome: "João Almeida",
      cnh: "1234567890",
      telefone: "(11) 91234-5678",
      status: "Ativo",
    },
    {
      id: 2,
      nome: "Maria Fernandes",
      cnh: "9876543210",
      telefone: "(11) 99876-5432",
      status: "Ativo",
    },
    {
      id: 3,
      nome: "Pedro Souza",
      cnh: "4567891230",
      telefone: "(11) 93456-7890",
      status: "Inativo",
    },
  ]);

  const adicionarMotorista = (novoMotorista) => {
    setMotoristas((prev) => [...prev, { id: Date.now(), ...novoMotorista }]);
  };

  const atualizarMotorista = (id, dadosAtualizados) => {
    setMotoristas((prev) =>
      prev.map((m) => (m.id === id ? { ...m, ...dadosAtualizados } : m))
    );
  };

  const excluirMotorista = (id) => {
    setMotoristas((prev) => prev.filter((m) => m.id !== id));
  };

  return (
    <MotoristasContext.Provider
      value={{
        motoristas,
        adicionarMotorista,
        atualizarMotorista,
        excluirMotorista,
      }}
    >
      {children}
    </MotoristasContext.Provider>
  );
}
