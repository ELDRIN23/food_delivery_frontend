import { Route, Routes } from "react-router-dom";
import React, { useContext } from "react";
import UserLayout from "../layouts/UserLayout";
import Home from "../pages/user/Home";
import Signup from "../pages/shared/Signup";
import Login from "../pages/shared/Login";
import About from "../pages/user/About";
import Contact from "../pages/user/Contact";
import Dishes from "../pages/user/Dishes";
import ErrorPage from "../pages/shared/ErrorPage";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../pages/Admin/Dashboard";
import Features from "../pages/Admin/Features";
import Products from "../pages/Admin/Products";
import { AuthContext } from "../context/AuthContext";
import CheckAuth from "../components/common/CheckAuth";
import UnAuth from "../pages/UnAuth/UnAuth";
import Cart from "../pages/user/Cart";

const Router = () => {
  const { isLoggedIn ,role} = useContext(AuthContext);
  // const role = "admin";
  return (
    <Routes>
      {/* User Layout Routes */}
      <Route
        path="/"
        element={
          <CheckAuth isAuthenticated={isLoggedIn} user={role}>
            <UserLayout />
          </CheckAuth>
        }
      >
        <Route index element={<Home />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="dishes" element={<Dishes />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart/>} />

      </Route>

      {/* Admin Layout Routes */}
      <Route
        path="/admin"
        element={
          <CheckAuth isAuthenticated={isLoggedIn} user={role}>
            <AdminLayout />
          </CheckAuth>
        }
      >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="products" element={<Products />} />
        <Route path="features" element={<Features />} />
      </Route>

      {/* Catch-all for unmatched routes */}
      <Route path="/unauth-page" element={<UnAuth />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
