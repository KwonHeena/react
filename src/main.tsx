import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./index.scss";
import App from "./App.tsx";

import CartCon from './pages/CartContext.tsx'


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CartCon>
    <HashRouter>
      <App />
    </HashRouter>
    </CartCon>
  </StrictMode>
);
