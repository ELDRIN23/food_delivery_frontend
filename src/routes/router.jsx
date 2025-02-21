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
import UnAuth from "../pages/unAuth/UnAuth";
import Cart from "../pages/user/Cart";
import AdminDishes from "../pages/Admin/AdminDishes";
import AdminRestaurants from "../pages/Admin/AdminRestaurants";
import ViewRestauranst from "../pages/Admin/ViewRestauranst";
import AdminLoginPage from "../pages/Admin/AdminLoginPage";
import PaymentPage from "../pages/user/PaymentPage";
import Account from "../pages/user/Account";
import FetchUsers from "../pages/Admin/FetchUsers";
import { AddDishes } from "../pages/Admin/AddDishes";

const Router = () => {
  const { isLoggedIn ,role} = useContext(AuthContext);
  // const role = "admin";
  return (
    <Routes>

      <Route path="admin-login" element={<AdminLoginPage />} />
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
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="about" element={<About />} />
        <Route path="dishes" element={<Dishes />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart/>} />
        <Route path="payment" element={<PaymentPage />} />
        <Route path="account" element={<Account />} />
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
        <Route index element={<Dashboard />} />
        <Route path="dishes" element={<AdminDishes />} />
        <Route path="restaurants" element={<AdminRestaurants />} />
        <Route path="view-restaurants" element={<ViewRestauranst />} />
        <Route path="products" element={<Products />} />
        <Route path="features" element={<Features />} />
        <Route path="users" element={<FetchUsers />} />
        <Route path="add-Dishes" element={<AddDishes />} />
      </Route>

      {/* Catch-all for unmatched routes */}
      <Route path="/unauth-page" element={<UnAuth />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
