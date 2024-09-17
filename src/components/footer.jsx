import { Link } from "react-router-dom";

import logoLarge from "/src/assets/logo/logo-lg-white.svg";
import logoSmall from "/src/assets/logo/logo-sm-white.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="text-center main-green-colour py-4 text-light d-flex flex-column justify-content-center align-items-center">
        <Link to="/" className="nav-side-item">
          <picture>
            <source media="(min-width: 992px)" srcSet={logoLarge} />
            <img src={logoSmall} aria-label="main logo" />
          </picture>
        </Link>
        <Link to="contact" className="link-text fs-0-75rem-to-1-rem text-decoration-none pt-2 text-light">
          Contact us
        </Link>
        <Link to="cart" className="link-text fs-0-75rem-to-1-rem text-decoration-none pt-2 text-light">
          Shopping cart
        </Link>
        <p className="text-light fs-0-75rem pt-2 m-0">© 2024 Tor-Håkon Bergseng. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
