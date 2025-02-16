import { Route, Routes } from "react-router-dom";
import React from "react";
import UserLayout from "../layouts/userLayout";
import Home from "../pages/user/Home";
import Signup from "../pages/shared/Signup";
import Login from "../pages/shared/Login";
import About from "../pages/user/About";
import Contact from "../pages/user/Contact";
import Dishes from "../pages/user/Dishes";
import AddToCart from "../pages/user/Cart";
import ErrorPage from "../pages/shared/ErrorPage";

const Router = () => {
  return (
    <Routes>
      {/* Main User Layout with Nested Routes */}
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="dishes" element={<Dishes />} />
        {/* <Route path="cart" element={<AddToCart />} /> */}
        <Route path="/AddToCart/:id" element={<AddToCart />} />
        



        {/* Catch-all for unmatched routes inside layout */}
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
