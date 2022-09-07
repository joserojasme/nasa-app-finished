import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AsteroidesNeoWs from "./pages/nasaCuriosity";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AsteroidesNeoWs />
  </React.StrictMode>
);
