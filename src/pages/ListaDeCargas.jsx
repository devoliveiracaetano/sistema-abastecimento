import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ListaDeCargas.css";
import caminhao1 from "../assets/caminhao1.jpg";
import caminhao3 from "../assets/caminhao3.png";
import caminhao4 from "../assets/caminhao4.png";

export default function ListaDeCargas() {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);
  const [popupFoto, setPopupFoto] = useState(null);

  const handleVoltar = () => {
    setFadeOut(true);
    setTimeout(() => {
      navigate("/menu"); // volta para tela menu
    }, 500);
  };

  const handleNovaCarga = () => {
    navigate("/informacoes-carga");
  };

  const cargasMock = [
    {
      id: 1,
      placa: "ABC-1234",
      motorista: "João Silva",
      posto: "Posto Central",
      produto: "Diesel",
      status: "Enviado",
      foto: caminhao1,
    },
    {
      id: 2,
      placa: "DEF-5678",
      motorista: "Maria Souza",
      posto: "Posto Sul",
      produto: "Gasolina",
      status: "Enviado",
      foto: caminhao3,
    },
    {
      id: 3,
      placa: "GHI-9012",
      motorista: "Carlos Pereira",
      posto: "Posto Norte",
      produto: "Etanol",
      status: "Enviado",
      foto: caminhao4,
    },
    {
      id: 4,
      placa: "JKL-3456",
      motorista: "Ana Lima",
      posto: "Posto Leste",
      produto: "Diesel",
      status: "Enviado",
      foto: caminhao1,
    },
    {
      id: 5,
      placa: "MNO-7890",
      motorista: "Pedro Santos",
      posto: "Posto Oeste",
      produto: "Gasolina",
      status: "Enviado",
      foto: caminhao3,
    },
  ];

  const [cargas, setCargas] = useState([]);

  useEffect(() => {
    setCargas(cargasMock);
  }, []);

  return (
    <div
      className={`lista-cargas-container ${fadeOut ? "fade-out" : "fade-in"}`}
    >
      <h1>Lista de Cargas</h1>
      <div className="top-buttons">
        <button className="nova-carga-btn" onClick={handleNovaCarga}>
          Criar Nova Carga
        </button>
        <button className="voltar-btn" onClick={handleVoltar}>
          Voltar para o Menu
        </button>
      </div>

      <table className="cargas-table">
        <thead>
          <tr>
            <th>Placa</th>
            <th>Motorista</th>
            <th>Posto</th>
            <th>Produto</th>
            <th>Status</th>
            <th>Foto</th>
          </tr>
        </thead>
        <tbody>
          {cargas.map((carga) => (
            <tr key={carga.id}>
              <td>{carga.placa}</td>
              <td>{carga.motorista}</td>
              <td>{carga.posto}</td>
              <td>{carga.produto}</td>
              <td className={`status ${carga.status.toLowerCase()}`}>
                {carga.status}
              </td>
              <td>
                <button
                  className="ver-foto-btn"
                  onClick={() => setPopupFoto(carga.foto)}
                >
                  👁️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Popup de foto */}
      {popupFoto && (
        <div className="popup-foto-overlay" onClick={() => setPopupFoto(null)}>
          <div className="popup-foto-content">
            <img src={popupFoto} alt="Carga" />
          </div>
        </div>
      )}
    </div>
  );
}
