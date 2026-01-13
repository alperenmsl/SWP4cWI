import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./MusicApp.tsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
