import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App.tsx";
import "@/main.css";
import { AuthProvider } from "./context/AuhProvider";
import { MantineProvider } from "@mantine/core";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <MantineProvider>
        <App />
      </MantineProvider>
    </AuthProvider>
  </React.StrictMode>
);
