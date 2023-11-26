import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MyContext from "./Components/MyContext.jsx";
import { SnackbarProvider } from "notistack";
import Snowfall from "react-snowfall";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyContext>
      <SnackbarProvider>
        <Snowfall color="lightblue" />
        <App />
      </SnackbarProvider>
    </MyContext>
  </React.StrictMode>
);
