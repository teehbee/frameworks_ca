import { Link } from "react-router-dom";
import React from "react";
import logoLarge from "/public/assets/logo/logo-lg-white.svg";
import logoSmall from "/public/assets/logo/logo-sm-white.svg";
import cartSmall from "/public/assets/icons/cart-sm-white.svg";
import cartLarge from "/public/assets/icons/cart-white.svg";
import searchIconThick from "/public/assets/icons/search-white.svg";
import SearchOverlay from "./searchOverlay";

function Header() {
  const [overLayVisible, setOverlayVisible] = React.useState(false);

  const showOverlay = () => setOverlayVisible(true);
  const hideOverlay = () => setOverlayVisible(false);

  return (
    <header className="main-green-colour">
      <div className="bg-white">
        <div className="container d-flex justify-content-between py-1 py-lg-0">
          <div className="d-none d-md-flex">
            <p className="header-text pe-3 my-1 fs-0-875">Delivery 1-3 days</p>
            <p className="header-text px-3 my-1 fs-0-875">Free shipping</p>
            <p className="header-text px-3 my-1 fs-0-875">Amazing customer support</p>
          </div>
          <div className="ms-auto d-flex align-items-center">
            <Link to="contact" className="link-text text-decoration-none text-dark fs-0-875">
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between p-3 align-items-center">
        <Link to="/" className="nav-side-item px-2">
          <picture className="ps-lg-4">
            <source media="(min-width: 992px)" srcSet={logoLarge} />
            <img src={logoSmall} aria-label="main logo" />
          </picture>
        </Link>
        <div className="container d-none d-lg-block">
          <input type="text" className="search-form-input w-100 secondary-green-colour" placeholder="Search for a product e.g. milk og crowbars" />
        </div>
        <nav className="nav-side-item d-flex align-items-center px-2">
          <Link to="cart">
            <picture>
              <source media="(min-width: 992px)" srcSet={cartLarge} />
              <img src={cartSmall} aria-label="main logo" />
            </picture>
          </Link>
          <Link to="cart" className="text-decoration-none">
            <p className="cart-count  m-0">
              <span className="count-circle fw-bold bg-white d-flex align-items-center justify-content-center green-font-color">0</span>
            </p>
          </Link>
          <img className="ps-2 d-lg-none" onClick={showOverlay} src={searchIconThick} />
          {overLayVisible && <SearchOverlay onClose={hideOverlay} />}
        </nav>
      </div>
    </header>
  );
}

export default Header;
