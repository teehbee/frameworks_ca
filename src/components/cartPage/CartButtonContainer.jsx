import { Link } from "react-router-dom";

function CartButton() {
  return (
    <div className="cart-button-container text-center pb-2 pb-md-5">
      <Link to="/success" className="">
        <button className="green-button w-100 my-3 my-md-5 py-1 py-md-2">Purchase items</button>
      </Link>

      <Link to="/" className="link-text fs-0-75rem-to-1-rem main-font-colour">
        Continue shopping
      </Link>
    </div>
  );
}

export default CartButton;
