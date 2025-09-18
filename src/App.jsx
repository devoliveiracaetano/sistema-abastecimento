import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import ListaDeCargas from "./pages/ListaDeCargas";
import InformacoesCarga from "./pages/InformacoesCarga";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/lista-cargas" element={<ListaDeCargas />} />
        <Route path="/informacoes-carga" element={<InformacoesCarga />} />
      </Routes>
    </BrowserRouter>
  );
}
