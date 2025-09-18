import React from "react";
import "./Login.css";
import caminhaoImg from "../assets/caminhao1.jpg";
import postoImg from "../assets/caminhao4.png";

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-background">
        <img src={postoImg} alt="Posto de gasolina" className="posto-bg" />
        <img src={caminhaoImg} alt="Caminhão-tanque" className="caminhao-bg" />
      </div>
      <div className="login-box">
        <h1 className="login-title">Logística de Carga e Descarga</h1>
        <form>
          <input type="text" placeholder="Usuário" />
          <input type="password" placeholder="Senha" />
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}
