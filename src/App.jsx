import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { rotas } from "./routes.jsx";

// Contextos
import { CaminhoesProvider } from "./contexts/CaminhoesContext";
import { ManutencoesProvider } from "./contexts/ManutencoesContext";
import { PostosProvider } from "./contexts/PostosContext";

// Componentes
import Sidebar from "./components/Sidebar";

function AppWrapper() {
  const location = useLocation();
  const mostrarSidebar = location.pathname !== "/"; // oculta sidebar na tela de login

  return (
    <div style={{ display: "flex" }}>
      {mostrarSidebar && <Sidebar rotas={rotas} />}

      <div style={{ flex: 1, padding: "20px" }}>
        <Routes>
          {rotas.map((r) => (
            <Route key={r.path} path={r.path} element={r.element} />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <CaminhoesProvider>
      <ManutencoesProvider>
        <PostosProvider>
          <BrowserRouter>
            <AppWrapper />
          </BrowserRouter>
        </PostosProvider>
      </ManutencoesProvider>
    </CaminhoesProvider>
  );
}
