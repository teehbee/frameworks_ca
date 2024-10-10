import { Link } from "react-router-dom";
import { logoLarge, logoSmall } from "../../assets/logo/index.jsx";

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
