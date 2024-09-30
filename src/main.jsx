import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { router } from "./routes/index.jsx";
import CartProvider from "./components/utils/CartContext.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.scss";

import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);
