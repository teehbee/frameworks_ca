import React from "react";
import { useNavigate } from "react-router-dom";
import { CartLogo, SearchOverlay, SearchFieldLargeScreen, LogoField, UpperNavBar } from "./index.jsx";
import { searchIconThick } from "../assets/icons/index.jsx";

function Header({ onSearch }) {
  const [overLayVisible, setOverlayVisible] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");

  const showOverlay = () => setOverlayVisible(true);
  const hideOverlay = () => setOverlayVisible(false);

  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm); // Notify the parent layout of the search term
    navigate("/"); // Redirect to the home page
  };

  return (
    <header className="main-green-colour">
      <UpperNavBar />
      <div className="d-flex justify-content-between p-3 align-items-center">
        <LogoField />
        <SearchFieldLargeScreen searchTerm={searchTerm} handleSearchChange={handleSearchChange} handleSearchSubmit={handleSearchSubmit} />
        <nav className="nav-side-item d-flex align-items-center px-2">
          <CartLogo />
          <img className="ps-2 d-lg-none" onClick={showOverlay} src={searchIconThick} />
          {overLayVisible && <SearchOverlay onClose={hideOverlay} searchTerm={searchTerm} handleSearchChange={handleSearchChange} handleSearchSubmit={handleSearchSubmit} />}
        </nav>
      </div>
    </header>
  );
}

export default Header;
