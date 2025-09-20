// src/routes.jsx
import Login from "./components/Login";
import MenuPrincipal from "./pages/MenuPrincipal";
import ListaDeCargas from "./pages/ListaDeCargas";
import InformacoesCarga from "./pages/InformacoesCarga";
import CadastroCaminhoes from "./pages/CadastroCaminhoes";
import ListaCaminhoes from "./pages/ListaCaminhoes";
import ManutencaoCaminhoes from "./pages/ManutencaoCaminhoes";
import ListaManutencoes from "./pages/ListaManutencoes";
import CadastroPosto from "./pages/CadastroPosto";

export const rotas = [
  { path: "/", element: <Login />, name: "Login", menu: false },
  {
    path: "/menu",
    element: <MenuPrincipal />,
    name: "Menu Principal",
    menu: true,
    categoria: "Geral",
  },
  {
    path: "/lista-cargas",
    element: <ListaDeCargas />,
    name: "Lista de Cargas",
    menu: true,
    categoria: "Geral",
  },
  {
    path: "/informacoes-carga",
    element: <InformacoesCarga />,
    name: "Informações da Carga",
    menu: true,
    categoria: "Geral",
  },
  {
    path: "/cadastro-caminhoes",
    element: <CadastroCaminhoes />,
    name: "Cadastro de Caminhões",
    menu: true,
    categoria: "Caminhões",
  },
  {
    path: "/lista-caminhoes",
    element: <ListaCaminhoes />,
    name: "Lista de Caminhões",
    menu: true,
    categoria: "Caminhões",
  },
  {
    path: "/manutencao-caminhoes",
    element: <ManutencaoCaminhoes />,
    name: "Manutenção de Caminhões",
    menu: true,
    categoria: "Caminhões",
  },
  {
    path: "/lista-manutencoes",
    element: <ListaManutencoes />,
    name: "Lista de Manutenções",
    menu: true,
    categoria: "Manutenções",
  },
  {
    path: "/cadastro-posto",
    element: <CadastroPosto />,
    name: "Cadastro de Postos",
    menu: true,
    categoria: "Postos",
  },
];
