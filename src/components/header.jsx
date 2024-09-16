import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-info">
      <div className="bg-white">
        <div className="container d-flex justify-content-between">
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
      <div className="container d-flex justify-content-between p-3">
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
