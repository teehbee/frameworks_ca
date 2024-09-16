import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-info">
      <div className=" container d-flex justify-content-between p-3">
        <Link to="/" className="text-decoration-none px-2 text-dark">
          Home
        </Link>
        <nav>
          <Link to="/" className="text-decoration-none px-2 text-dark">
            Home
          </Link>
          <Link to="contact" className="text-decoration-none px-2 text-dark">
            Contact
          </Link>
          <Link to="product" className="text-decoration-none px-2 text-dark">
            Product
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
