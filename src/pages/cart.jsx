import React from "react";
import { Link } from "react-router-dom";
import CartItem from "../components/cartPage/CartItem";
import CartHeader from "../components/cartPage/CartHeader";

function Cart() {
  return (
    <div className="container pt-5">
      <h1 className="fs-1-25-to-2rem fw-bold">Shopping cart</h1>
      <CartHeader />
      <CartItem />
      <CartItem />
      <CartItem />
      <div className="cart-sum">
        <div className="row cart-top-border pt-3">
          <div className="col-2">
            <p className="fw-bold fs-1-to-1-125">Total</p>
          </div>
          <div className="col-2 col-md-2 ms-auto">
            <p className="fs-0-75rem-to-1-rem fw-bold">$225</p>
          </div>
          <div className="col-3 col-sm-2 col-md-1 text-end">
            <p className="fs-0-75rem-to-1-rem fw-bold">3 items</p>
          </div>
        </div>
      </div>
      <div className="cart-button-container text-center pb-2 pb-md-5">
        <Link to="/success" className="">
          <button className="green-button w-100 my-3 my-md-5 py-1 py-md-2">Purchase items</button>
        </Link>

        <Link to="/" className="link-text fs-0-75rem-to-1-rem main-font-colour">
          Continue shopping
        </Link>
      </div>
    </div>
  );
}

export default Cart;
