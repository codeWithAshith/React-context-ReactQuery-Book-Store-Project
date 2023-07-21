import React from "react";
import { Outlet } from "react-router-dom";
import NavbarComponent from "../Navbar.component";

const SharedLayout = () => {
  return (
    <div>
      <NavbarComponent />
      <Outlet />
    </div>
  );
};

export default SharedLayout;
