import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./contexts/AuthProvider";
import { BrowserRouter } from "react-router-dom";
import { createTheme, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  palette: {
    primary: { dark: "#5f0937", main: "#a31545", light: "#e91e63" },
    secondary: { dark: "#b28035", main: "#ffb74d", light: "#ffc570" },
    text: { primary: "#3f3f3f" },
    background: { default: "#efefef", paper: "#fefefe" },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
