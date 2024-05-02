import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Movies from "./pages/Movies.tsx";
import NotFound from "./pages/404.tsx";
import Registration from "./pages/Registration.tsx";
import EntertainmentCategory from "./pages/EntertainmentCategory.tsx";
import Home from "./pages/Home.tsx";
import { homeLoader } from "./lib/loader/homeLoader.ts";
import { loader as movieLoader } from "./lib/loader/movieLoader.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: homeLoader,
  },
  {
    path: "/entertainmentCategory",
    element: <EntertainmentCategory />,
  },
  {
    path: "/movies",
    element: <Movies />,
    loader: movieLoader,
  },
  {
    path: "/register",
    element: <Registration />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
