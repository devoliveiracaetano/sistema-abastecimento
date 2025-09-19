import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import caminhao1 from "../assets/caminhao1.jpg";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/menu");
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h1>Logística de Carga e Descarga</h1>
        <input type="text" placeholder="Usuário" required />
        <input type="password" placeholder="Senha" required />
        <button type="submit">Entrar</button>
      </form>

      <div className="login-image-wrapper">
        <img src={caminhao1} alt="Caminhão" className="animated-image" />
      </div>
    </div>
  );
}
