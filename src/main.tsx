import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "@/App.tsx";
import { loadConfig } from "@/shared/index.ts";
loadConfig().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
});
