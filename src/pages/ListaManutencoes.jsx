import React, { useContext } from "react";
import { ManutencoesContext } from "../contexts/ManutencoesContext";
import { CaminhoesContext } from "../contexts/CaminhoesContext";
import "./ListaManutencoes.css";

export default function ListaManutencoes() {
  const { manutencoes } = useContext(ManutencoesContext);
  const { caminhoes } = useContext(CaminhoesContext);

  const getCaminhaoInfo = (id) => {
    const caminhao = caminhoes.find((c) => c.id === id);
    return caminhao || { placa: "-", tipo: "-", marca: "-", modelo: "-" };
  };

  return (
    <div className="manutencoes-container">
      <h1>Manutenções</h1>
      <div className="manutencoes-grid">
        {manutencoes.map((m) => {
          const c = getCaminhaoInfo(m.caminhaoId);
          const statusClass = m.dataSaida ? "concluido" : "em-manutencao";

          return (
            <div key={m.id} className={`card ${statusClass}`}>
              <div className="card-header">
                <h2>{c.placa}</h2>
                <span>
                  {c.tipo} - {c.marca}
                </span>
              </div>
              <div className="card-body">
                <p>
                  <strong>Modelo:</strong> {c.modelo}
                </p>
                <p>
                  <strong>Data Envio:</strong> {m.dataEnvio}
                </p>
                <p>
                  <strong>Oficina:</strong> {m.oficina}
                </p>
                <p>
                  <strong>Gastos:</strong> R$ {m.gastos}
                </p>
                <p>
                  <strong>Status:</strong>{" "}
                  {m.dataSaida ? "Concluído" : "Em manutenção"}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
