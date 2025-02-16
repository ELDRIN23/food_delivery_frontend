import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/router";
import AuthProvider  from "./context/AuthContext"; // Make sure the path is correct
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider> {/* Wrap with AuthProvider */}
        <Router />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
