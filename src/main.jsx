import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/router";
import AuthProvider from "./context/AuthContext"; // Make sure the path is correct
import "./index.css";
// import  CartProvider from "./context/CartContext";
import { CartProvider } from "./context/CartContext";
// y
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <CartProvider>
        <Router />
      </CartProvider>
    </AuthProvider>
  </BrowserRouter>
);
