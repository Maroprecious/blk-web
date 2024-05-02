import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App.tsx";
import "@/main.css";
import { AuthProvider } from "./context/AuhProvider";
import { MantineProvider } from "@mantine/core";
import { CartProvider } from "./context/cart";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <MantineProvider>
          <App />
        </MantineProvider>
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);
