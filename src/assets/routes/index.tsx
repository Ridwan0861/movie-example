import Details from "../../features/detail";
import Home from "../../features/home";
import Layout from "../componen/layout";
import Movie from "../movie";
import TvShow from "../tv-show";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoutes from "./protected-routes";

export const router = createBrowserRouter([

  {
    element: <ProtectedRoutes />,
    
  }

  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/detail/:id",
        element: <details />,
      },
      {
        path: "/movie",
        element: <Movie />,
      },
      {
        path: "/tv-show",
        element: <TvShow />,
      },
    ],
  },
]);
