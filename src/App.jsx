import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

import Menu from './componentes/menu'
import Home from './componentes/telas/home'
import Sobre from "./componentes/telas/sobre";

// IMPORTAÇÃO DAS TELAS DO PROJETO
import Clientes from "./componentes/telas/clientes/Clientes";
import Pedidos from "./componentes/telas/pedidos/Pedidos";
import Funcionarios from "./componentes/telas/funcionarios/Funcionarios";
import Materiais from "./componentes/telas/materiais/Materiais";
import ItensPedido from "./componentes/telas/itensPedidos/ItensPedido";
import MenuPublico from './componentes/MenuPublico';
import MenuPrivado from './componentes/MenuPrivado';
import Login from "./componentes/telas/login/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MenuPublico />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/sobre",
        element: <Sobre />,
      },
      {
        path : "login",
        element :  <Login/>
      }]},
      // Rotas do projeto
       {path: "/privado",
        element: <MenuPrivado />,
        children: [
      {
        path: "clientes",
        element: <Clientes/>,
      },
      {
        path: "pedidos",
        element: <Pedidos />,
      },
      {
        path: "funcionarios",
        element: <Funcionarios />,
      },
      {
        path: "materiais",
        element: <Materiais />,
      },
      {
        path: "itenspedido",
        element: <ItensPedido />,
      },
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
