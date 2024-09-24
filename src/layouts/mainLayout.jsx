import React, { useState } from "react";
import { Header, Footer, Breadcrumbs } from "../components";
import { Outlet, useLocation } from "react-router-dom";

function MainLayout() {
  const location = useLocation();
  const showBreadcrumbs = location.pathname !== "/";
  const [searchTerm, setSearchTerm] = useState("");
  const [clearSearch, setClearSearch] = useState(false);

  const productTitles = ["Gold", "Crowbar", "Hammer", "Laptop", "Mobile Phone", "Headphones", "Shampoo"];

  const handleSearch = (term) => {
    setSearchTerm(term);
    setClearSearch(false);
  };

  const handleClearSearch = () => {
    setSearchTerm(""); // Clear the search term
    setClearSearch(true); // Trigger the search field to be cleared
  };

  return (
    <div>
      <Header onSearch={handleSearch} clearSearch={clearSearch} suggestions={productTitles} />
      {showBreadcrumbs && <Breadcrumbs />}
      <Outlet context={{ searchTerm, setSearchTerm, handleClearSearch }} />
      <Footer />
    </div>
  );
}

export default MainLayout;
