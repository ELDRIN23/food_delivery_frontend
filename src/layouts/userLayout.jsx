import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/User/footer.jsx";
import { Header } from "../components/User/header.jsx";

const UserLayout = () => {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Page Content */}
      <div className="min-h-96">
        <Outlet />
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default UserLayout;
