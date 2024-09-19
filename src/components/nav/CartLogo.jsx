import React from "react";
import { Link } from "react-router-dom";
import { cartSmall, cartLarge } from "../../assets/icons/index.jsx";

function CartLogo() {
  return (
    <>
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
    </>
  );
}

export default CartLogo;
