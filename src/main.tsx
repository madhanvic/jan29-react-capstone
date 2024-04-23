import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Movies from "./pages/Movies.tsx";
import NotFound from "./pages/404.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
