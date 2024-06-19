import React, { useEffect } from "react";
import TopBar from "../Components/TopBar";
import NavBar from "../Components/NavBar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Footer";

const Layout = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <TopBar />
      )}
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <NavBar />
      )}

      <Outlet />
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <Footer />
      )}
    </>
  );
};

export default Layout;
