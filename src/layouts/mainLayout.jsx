import React from "react";
import { Header, Footer, Breadcrumbs } from "../components";
import { Outlet, useLocation } from "react-router-dom";

function MainLayout() {
  const location = useLocation();
  const showBreadcrumbs = location.pathname !== "/";

  return (
    <div>
      <Header />
      {showBreadcrumbs && <Breadcrumbs />}
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
