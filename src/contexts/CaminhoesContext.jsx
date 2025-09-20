// CaminhoesContext.js
import React, { createContext, useState } from "react";

export const CaminhoesContext = createContext();

export function CaminhoesProvider({ children }) {
  const [caminhoes, setCaminhoes] = useState([
    {
      id: 1,
      placa: "JGZ1588",
      tipo: "TRUCK",
      marca: "M.BENZ",
      modelo: "L 1620",
      anoFab: 2007,
      capacidadeVol: "15M³",
      compartimentos: 3,
      divComp: "3 (5M³)",
    },
    {
      id: 2,
      placa: "SSO6G48",
      tipo: "TRUCK",
      marca: "M.BENZ",
      modelo: "ATEGO 3033 CE",
      anoFab: 2024,
      capacidadeVol: "23M³",
      compartimentos: 6,
      divComp: "3 (5M³)",
    },
    {
      id: 3,
      placa: "ABC1234",
      tipo: "TRUCK",
      marca: "VOLVO",
      modelo: "FM 330",
      anoFab: 2018,
      capacidadeVol: "18M³",
      compartimentos: 4,
      divComp: "2 (4,5M³)",
    },
    {
      id: 4,
      placa: "DEF5678",
      tipo: "TRUCK",
      marca: "SCANIA",
      modelo: "P 310",
      anoFab: 2020,
      capacidadeVol: "20M³",
      compartimentos: 5,
      divComp: "5 (4M³)",
    },
    {
      id: 5,
      placa: "GHI9012",
      tipo: "TRUCK",
      marca: "FORD",
      modelo: "CARGO 2429",
      anoFab: 2015,
      capacidadeVol: "16M³",
      compartimentos: 3,
      divComp: "3 (5,3M³)",
    },
    {
      id: 6,
      placa: "JKL3456",
      tipo: "TRUCK",
      marca: "M.BENZ",
      modelo: "ACTROS 2546",
      anoFab: 2022,
      capacidadeVol: "25M³",
      compartimentos: 5,
      divComp: "5 (5M³)",
    },
    {
      id: 7,
      placa: "MNO7890",
      tipo: "TRUCK",
      marca: "VOLVO",
      modelo: "FH 460",
      anoFab: 2021,
      capacidadeVol: "22M³",
      compartimentos: 4,
      divComp: "4 (5,5M³)",
    },
    {
      id: 8,
      placa: "PQR1234",
      tipo: "TRUCK",
      marca: "SCANIA",
      modelo: "G 400",
      anoFab: 2019,
      capacidadeVol: "19M³",
      compartimentos: 3,
      divComp: "3 (6,3M³)",
    },
    // Adicione mais caminhões aqui seguindo o mesmo padrão, se necessário
  ]);

  return (
    <CaminhoesContext.Provider value={{ caminhoes, setCaminhoes }}>
      {children}
    </CaminhoesContext.Provider>
  );
}
