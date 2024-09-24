import React, { useState } from "react";
import { Header, Footer, Breadcrumbs } from "../components";
import { Outlet, useLocation } from "react-router-dom";

function MainLayout() {
  const location = useLocation();
  const showBreadcrumbs = location.pathname !== "/";
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <Header onSearch={handleSearch} />
      {showBreadcrumbs && <Breadcrumbs />}
      <Outlet context={{ searchTerm }} />
      <Footer />
    </div>
  );
}

export default MainLayout;
