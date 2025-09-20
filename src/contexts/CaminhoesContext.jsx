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
      ano: 2007,
      capacidadeTotal: 15,
      compartimentos: ["5M³", "5M³", "5M³"],
    },
    {
      id: 2,
      placa: "SSO6G48",
      tipo: "TRUCK",
      marca: "M.BENZ",
      modelo: "ATEGO 3033 CE",
      ano: 2024,
      capacidadeTotal: 23,
      compartimentos: ["5M³", "5M³", "5M³", "3M³", "3M³", "2M³"],
    },
    {
      id: 3,
      placa: "SSO7C90",
      tipo: "TRUCK",
      marca: "M.BENZ",
      modelo: "ATEGO 3033 CE",
      ano: 2024,
      capacidadeTotal: 23,
      compartimentos: ["5M³", "5M³", "5M³", "3M³", "3M³", "2M³"],
    },
    {
      id: 4,
      placa: "PQR2A41",
      tipo: "TRUCK",
      marca: "VOLVO",
      modelo: "VM 270 8X2R",
      ano: 2016,
      capacidadeTotal: 20,
      compartimentos: ["5M³", "5M³", "5M³", "5M³"],
    },
    {
      id: 5,
      placa: "PTN5D54",
      tipo: "TRUCK",
      marca: "VOLVO",
      modelo: "VM 330 8X2R",
      ano: 2019,
      capacidadeTotal: 21,
      compartimentos: ["5M³", "5M³", "5M³", "3M³", "3M³"],
    },
    {
      id: 6,
      placa: "REI2H73",
      tipo: "CAVALO",
      marca: "VOLVO",
      modelo: "FH 460 6X2T",
      ano: 2021,
    },
    {
      id: 7,
      placa: "RER9A37",
      tipo: "REBOQUE",
      marca: "RANDON",
      modelo: "SR / TQ PP 03E",
      ano: 2021,
      capacidadeTotal: 35,
      compartimentos: ["5M³", "5M³", "5M³", "5M³", "5M³", "5M³", "5M³"],
    },
    {
      id: 8,
      placa: "RES7I81",
      tipo: "CAVALO",
      marca: "M.BENZ",
      modelo: "AXOR 2041 S",
      ano: 2021,
    },
    {
      id: 9,
      placa: "HLQ8A11",
      tipo: "REBOQUE",
      marca: "GUERRA",
      modelo: "SR/ AG TQ",
      ano: 2021,
      capacidadeTotal: 30,
      compartimentos: ["10M³", "10M³", "5M³", "5M³"],
    },
    {
      id: 10,
      placa: "REH4F51",
      tipo: "CAVALO",
      marca: "M.BENZ",
      modelo: "ACTROS 2548S",
      ano: 2020,
    },
    {
      id: 11,
      placa: "QTS6F15",
      tipo: "REBOQUE",
      marca: "RODOTECNICA",
      modelo: "SR/ TQPP 3E",
      ano: 2019,
      capacidadeTotal: 35,
      compartimentos: ["5M³", "5M³", "5M³", "5M³", "5M³", "5M³", "5M³"],
    },
    {
      id: 12,
      placa: "REU5E65",
      tipo: "CAVALO",
      marca: "M.BENZ",
      modelo: "AXOR 2544 S",
      ano: 2022,
    },
    {
      id: 13,
      placa: "REU5E71",
      tipo: "REBOQUE",
      marca: "RANDON",
      modelo: "SR / TQ PP 03E",
      ano: 2022,
      capacidadeTotal: 35,
      compartimentos: ["5M³", "5M³", "5M³", "5M³", "5M³", "5M³", "5M³"],
    },
    {
      id: 14,
      placa: "REI2H84",
      tipo: "CAVALO",
      marca: "VOLVO",
      modelo: "FH 460 6X2T",
      ano: 2020,
    },
    {
      id: 15,
      placa: "REJ3J73",
      tipo: "REBOQUE",
      marca: "FACCHINI",
      modelo: "SR / SRF TP",
      ano: 2020,
      capacidadeTotal: 35,
      compartimentos: ["5M³", "5M³", "5M³", "5M³", "5M³", "5M³", "5M³"],
    },
  ]);

  const adicionarCaminhao = (caminhao) => {
    setCaminhoes((prev) => [...prev, { id: prev.length + 1, ...caminhao }]);
  };

  return (
    <CaminhoesContext.Provider value={{ caminhoes, adicionarCaminhao }}>
      {children}
    </CaminhoesContext.Provider>
  );
}
