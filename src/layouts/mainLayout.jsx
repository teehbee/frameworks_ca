import React from "react";
import { Header, Footer, Breadcrumbs } from "../components";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <Header />
      <Breadcrumbs />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
