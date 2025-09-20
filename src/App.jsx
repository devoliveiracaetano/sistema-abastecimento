import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutDrawer from "./layouts/LayoutDrawer";
import { rotas } from "./routes";
import Login from "./components/Login";

// Contexts
import { CaminhoesProvider } from "./contexts/CaminhoesContext";
import { ManutencoesProvider } from "./contexts/ManutencoesContext";
import { PostosProvider } from "./contexts/PostosContext";
import { PedidosProvider } from "./contexts/PedidosContext";

export default function App() {
  return (
    <CaminhoesProvider>
      <ManutencoesProvider>
        <PostosProvider>
          <PedidosProvider>
            <BrowserRouter>
              <Routes>
                {/* Login não usa layout */}
                <Route path="/" element={<Login />} />

                {/* Todas as outras rotas usam o LayoutDrawer */}
                <Route element={<LayoutDrawer />}>
                  {rotas
                    .filter((r) => r.path !== "/") // exceto login
                    .map((r) => (
                      <Route key={r.path} path={r.path} element={r.element} />
                    ))}
                </Route>
              </Routes>
            </BrowserRouter>
          </PedidosProvider>
        </PostosProvider>
      </ManutencoesProvider>
    </CaminhoesProvider>
  );
}
