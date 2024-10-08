import { useContext, useState } from "react";
import { CartContext } from "../utils/CartContext";
import { Link } from "react-router-dom";

function CartButton() {
  const { cart, clearCart } = useContext(CartContext);
  const [emptyCartMessage, setEmptyCartMessage] = useState("");

  const handlePurchase = () => {
    if (cart.length > 0) {
      clearCart();
      setEmptyCartMessage("");
    } else {
      setEmptyCartMessage("Your cart is empty!");
    }
  };
  return (
    <div className="cart-button-container text-center pb-2 pb-md-5">
      <Link to={cart.length > 0 ? "/success" : "#"}>
        <button onClick={handlePurchase} className="green-button w-100 my-3 my-md-5 py-1 py-md-2 fw-bold">
          Purchase items
        </button>
      </Link>
      {emptyCartMessage && <p className="fw-bold fs-1-to-1-125 main-font-colour pb-3">{emptyCartMessage}</p>}
      <Link to="/" className="link-text fs-0-75rem-to-1-rem main-font-colour">
        Continue shopping
      </Link>
    </div>
  );
}

export default CartButton;
