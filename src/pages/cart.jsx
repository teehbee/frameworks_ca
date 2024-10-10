import { useContext } from "react";
import { CartContext } from "../components/utils/CartContext";
import CartItem from "../components/cartPage/CartItem";
import CartHeader from "../components/cartPage/CartHeader";
import CartSum from "../components/cartPage/CartSum";
import CartButton from "../components/cartPage/CartButtonContainer";
import useScrollToTop from "../components/utils/useScrollToTop";

function Cart() {
  useScrollToTop();
  const { cart = [] } = useContext(CartContext);
  return (
    <>
      <div className="container">
        <h1 className="fs-1-25-to-2rem fw-bold">Shopping cart</h1>
        <CartHeader />
        {cart.length > 0 ? cart.map((product) => <CartItem key={product.id} product={product} />) : <p className="pt-3 fw-bold fs-0-75rem-to-1-rem">Your cart is empty</p>}
        <CartSum />
        <CartButton />
      </div>
    </>
  );
}

export default Cart;
