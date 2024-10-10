import { Link } from "react-router-dom";

function UpperNavBar() {
  return (
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
  );
}

export default UpperNavBar;
