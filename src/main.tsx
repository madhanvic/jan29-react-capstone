import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./pages/Movies.tsx";
import NotFound from "./pages/404.tsx";
import Registration from "./pages/Registration.tsx";
import EntertainmentCategory from "./pages/EntertainmentCategory.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route
          path="/entertainmentCategory"
          element={<EntertainmentCategory />}
        />
        <Route path="/movies" element={<Movies />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
