import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToasterProvider } from "@/providers/";
import ThemeConfig from "@/theme";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeConfig>
      <App />
      <ToasterProvider />
    </ThemeConfig>
  </StrictMode>
);
