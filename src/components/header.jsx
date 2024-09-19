import React from "react";
import { CartLogo, SearchOverlay, SearchFieldLargeScreen, LogoField, UpperNavBar } from "./index.jsx";
import { searchIconThick } from "../assets/icons/index.jsx";

function Header() {
  // Toggle for search overlay on small screens
  const [overLayVisible, setOverlayVisible] = React.useState(false);

  const showOverlay = () => setOverlayVisible(true);
  const hideOverlay = () => setOverlayVisible(false);

  // Search form data

  const [searchFormData, setSearchFormData] = React.useState("");

  const handleSearchChange = (event) => {
    setSearchFormData(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log(searchFormData);
  };

  return (
    <header className="main-green-colour">
      <UpperNavBar />
      <div className="d-flex justify-content-between p-3 align-items-center">
        <LogoField />
        <SearchFieldLargeScreen searchFormData={searchFormData} handleSearchChange={handleSearchChange} handleSearchSubmit={handleSearchSubmit} />
        <nav className="nav-side-item d-flex align-items-center px-2">
          <CartLogo />
          <img className="ps-2 d-lg-none" onClick={showOverlay} src={searchIconThick} />
          {overLayVisible && <SearchOverlay onClose={hideOverlay} searchFormData={searchFormData} handleSearchChange={handleSearchChange} handleSearchSubmit={handleSearchSubmit} />}
        </nav>
      </div>
    </header>
  );
}

export default Header;
