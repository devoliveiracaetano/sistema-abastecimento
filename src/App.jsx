import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import MenuPrincipal from "./pages/MenuPrincipal";
import ListaDeCargas from "./pages/ListaDeCargas";
import InformacoesCarga from "./pages/InformacoesCarga";
import CadastroCaminhoes from "./pages/CadastroCaminhoes";
import ListaCaminhoes from "./pages/ListaCaminhoes";
import { CaminhoesProvider } from "./contexts/CaminhoesContext";

export default function App() {
  return (
    <CaminhoesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/menu" element={<MenuPrincipal />} />
          <Route path="/lista-cargas" element={<ListaDeCargas />} />
          <Route path="/informacoes-carga" element={<InformacoesCarga />} />
          <Route path="/cadastro-caminhoes" element={<CadastroCaminhoes />} />
          <Route path="/lista-caminhoes" element={<ListaCaminhoes />} />
        </Routes>
      </BrowserRouter>
    </CaminhoesProvider>
  );
}
