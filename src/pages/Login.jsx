import React from "react";
import { useNavigate } from "react-router-dom";
import caminhao1 from "../assets/caminhao1.jpg";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Redireciona para Dashboard após login
    navigate("/dashboard");
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
