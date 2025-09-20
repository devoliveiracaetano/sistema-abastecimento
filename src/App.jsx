// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutDrawer from "./layouts/LayoutDrawer";
import { rotas } from "./routes";
import Login from "./components/Login";

// Importando todos os providers
import { PostosProvider } from "./contexts/PostosContext";
import { CaminhoesProvider } from "./contexts/CaminhoesContext";
import { MotoristasProvider } from "./contexts/MotoristasContext";
import { PedidosProvider } from "./contexts/PedidosContext";
import { ManutencoesProvider } from "./contexts/ManutencoesContext";

export default function App() {
  return (
    <PostosProvider>
      <CaminhoesProvider>
        <MotoristasProvider>
          <PedidosProvider>
            <ManutencoesProvider>
              <BrowserRouter>
                <Routes>
                  {/* Login não usa layout */}
                  <Route path="/login" element={<Login />} />

                  {/* Todas as outras rotas usam LayoutDrawer */}
                  <Route element={<LayoutDrawer />}>
                    {rotas
                      .filter((r) => r.path !== "/login")
                      .map((r) => (
                        <Route key={r.path} path={r.path} element={r.element} />
                      ))}
                  </Route>
                </Routes>
              </BrowserRouter>
            </ManutencoesProvider>
          </PedidosProvider>
        </MotoristasProvider>
      </CaminhoesProvider>
    </PostosProvider>
  );
}
