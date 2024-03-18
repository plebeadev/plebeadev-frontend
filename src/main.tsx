import React from "react";
import ReactDOM from "react-dom/client";
import Provider from "@/components/provider";
import "@/assets/styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider.RouterProvider />
  </React.StrictMode>
);
