import React from "react";
import CartItem from "../components/cartPage/CartItem";
import CartHeader from "../components/cartPage/CartHeader";
import CartSum from "../components/cartPage/CartSum";
import CartButton from "../components/cartPage/CartButtonContainer";

function Cart() {
  return (
    <div className="container pt-5">
      <h1 className="fs-1-25-to-2rem fw-bold">Shopping cart</h1>
      <CartHeader />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartSum />
      <CartButton />
    </div>
  );
}

export default Cart;
