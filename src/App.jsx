import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Páginas
import Login from "./components/Login";
import MenuPrincipal from "./pages/MenuPrincipal";
import ListaDeCargas from "./pages/ListaDeCargas";
import InformacoesCarga from "./pages/InformacoesCarga";
import CadastroCaminhoes from "./pages/CadastroCaminhoes";
import ListaCaminhoes from "./pages/ListaCaminhoes";
import ManutencaoCaminhoes from "./pages/ManutencaoCaminhoes";
import ListaManutencoes from "./pages/ListaManutencoes";

// Contextos
import { CaminhoesProvider } from "./contexts/CaminhoesContext";
import { ManutencoesProvider } from "./contexts/ManutencoesContext";

export default function App() {
  return (
    <CaminhoesProvider>
      <ManutencoesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/menu" element={<MenuPrincipal />} />
            <Route path="/lista-cargas" element={<ListaDeCargas />} />
            <Route path="/informacoes-carga" element={<InformacoesCarga />} />
            <Route path="/cadastro-caminhoes" element={<CadastroCaminhoes />} />
            <Route path="/lista-caminhoes" element={<ListaCaminhoes />} />
            <Route
              path="/manutencao-caminhoes"
              element={<ManutencaoCaminhoes />}
            />
            <Route path="/lista-manutencoes" element={<ListaManutencoes />} />
          </Routes>
        </BrowserRouter>
      </ManutencoesProvider>
    </CaminhoesProvider>
  );
}
