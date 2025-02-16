import React from "react";
import { Outlet } from "react-router-dom";
import { MainHeader } from "../components/main/MainHeader.jsx";
import { MainFooter } from "../components/main/MainFooter.jsx";

const UserLayout = () => {
  return (
    <>
      {/* Header */}
      <MainHeader />

      {/* Page Content */}
      <div className="min-h-96">
        <Outlet />
      </div>

      {/* Footer */}
      <MainFooter />
    </>
  );
};

export default UserLayout;
