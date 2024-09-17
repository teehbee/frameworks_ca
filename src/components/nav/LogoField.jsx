import React from "react";
import { Link } from "react-router-dom";
import logoLarge from "/src/assets/logo/logo-lg-white.svg";
import logoSmall from "/src/assets/logo/logo-sm-white.svg";

function LogoField() {
  return (
    <Link to="/" className="nav-side-item px-2">
      <picture className="ps-lg-4">
        <source media="(min-width: 992px)" srcSet={logoLarge} />
        <img src={logoSmall} aria-label="main logo" />
      </picture>
    </Link>
  );
}

export default LogoField;
