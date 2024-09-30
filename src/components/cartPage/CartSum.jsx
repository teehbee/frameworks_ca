import React, { useContext } from "react";
import { CartContext } from "../utils/CartContext";
import Cart from "../../pages/cart";

function CartSum() {
  const { cart } = useContext(CartContext);

  const totalSum = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);
  const itemCount = cart.reduce((count, product) => count + product.quantity, 0);
  return (
    <div className="cart-sum">
      <div className="row cart-top-border pt-3">
        <div className="col-2">
          <p className="fw-bold fs-1-to-1-125">Total</p>
        </div>
        <div className="col-2 col-md-2 ms-auto">
          <p className="fs-0-75rem-to-1-rem fw-bold">${totalSum.toFixed(2)}</p>
        </div>
        <div className="col-3 col-sm-2 col-md-1 text-end">
          <p className="fs-0-75rem-to-1-rem fw-bold">
            {itemCount} {itemCount === 1 ? `item` : `items`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartSum;
