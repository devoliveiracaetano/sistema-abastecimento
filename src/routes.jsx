import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import ListaDeCargas from "./pages/ListaDeCargas";
import InformacoesCarga from "./pages/InformacoesCarga";
import CadastroCaminhoes from "./pages/CadastroCaminhoes";
import ListaCaminhoes from "./pages/ListaCaminhoes";
import ManutencaoCaminhoes from "./pages/ManutencaoCaminhoes";
import ListaManutencoes from "./pages/ListaManutencoes";
import CadastroPosto from "./pages/CadastroPosto";
import ListaPostos from "./pages/ListaPostos";
import CadastroPedidos from "./pages/CadastroPedidos";
import ListaPedidos from "./pages/ListaPedidos";

export const rotas = [
  { path: "/", element: <Login />, name: "Login", menu: false },
  {
    path: "/dashboard",
    element: <Dashboard />,
    name: "Dashboard",
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
  {
    path: "/lista-postos",
    element: <ListaPostos />,
    name: "Lista de Postos",
    menu: true,
    categoria: "Postos",
  },
  {
    path: "/cadastro-pedidos",
    element: <CadastroPedidos />,
    name: "Cadastro de Pedidos",
    menu: true,
    categoria: "Pedidos",
  },
  {
    path: "/lista-pedidos",
    element: <ListaPedidos />,
    name: "Lista de Pedidos",
    menu: true,
    categoria: "Pedidos",
  },
];
