import React from "react";

// Componentes
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";

// Cargas
import ListaDeCargas from "./pages/ListaDeCargas";
import InformacoesCarga from "./pages/InformacoesCarga";

// Caminhões
import CadastroCaminhoes from "./pages/CadastroCaminhoes";
import ListaCaminhoes from "./pages/ListaCaminhoes";
import ManutencaoCaminhoes from "./pages/ManutencaoCaminhoes";

// Manutenções
import ListaManutencoes from "./pages/ListaManutencoes";

// Postos
import CadastroPosto from "./pages/CadastroPosto";
import ListaPostos from "./pages/ListaPostos";

export const rotas = [
  // Login
  { path: "/", element: <Login />, name: "Login", menu: false },

  // Dashboard Geral
  {
    path: "/dashboard",
    element: <Dashboard />,
    name: "Dashboard",
    menu: true,
    categoria: "Geral",
  },

  // Cargas
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

  // Caminhões
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

  // Manutenções
  {
    path: "/lista-manutencoes",
    element: <ListaManutencoes />,
    name: "Lista de Manutenções",
    menu: true,
    categoria: "Manutenções",
  },

  // Postos
  {
    path: "/cadastro-posto",
    element: <CadastroPosto />,
    name: "Cadastro de Postos",
    menu: true,
    categoria: "Postos",
  },
  {
    path: "/lista-postos",
    element: <ListaPostos />,
    name: "Lista de Postos",
    menu: true,
    categoria: "Postos",
  },
];
