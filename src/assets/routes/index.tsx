import Authetication from "../../features/auth";
import Details from "../../features/detail";
import Home from "../../features/home";
import Layout from "../componen/layout";
import ProtectedRoutes from "./protected-routes";
import TvShow from "../tv-show";
import { createBrowserRouter } from "react-router-dom";

// import Movie from "../movie";

export const router = createBrowserRouter([
  {
    element: <ProtectedRoutes />,
    children: [
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
            element: <Details />,
          },
          {
            path: "/movie",
            // element: <Movie />,
          },
          {
            path: "/tv-show",
            element: <TvShow />,
          },
          {
            path: "/login",
            element: <Authetication />,
          },
        ],
      },
    ],
  },
]);
