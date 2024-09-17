import React from "react";
import searchIconThick from "/src/assets/icons/search-white.svg";
import UpperNavBar from "./nav/UpperNavBar.jsx";
import LogoField from "./nav/LogoField.jsx";
import SearchFieldLargeScreen from "./nav/SearchformLarge.jsx";
import SearchOverlay from "./nav/SearchOverlay.jsx";
import CartLogo from "./nav/CartLogo.jsx";

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
