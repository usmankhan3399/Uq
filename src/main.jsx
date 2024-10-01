import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./assets/styles/global.css";
import "./i18n";

import { ThemeProvider } from "@emotion/react";
import theme from "./assets/theme/theme.jsx";
createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <StrictMode>
      <App />
    </StrictMode>
  </ThemeProvider>
);
