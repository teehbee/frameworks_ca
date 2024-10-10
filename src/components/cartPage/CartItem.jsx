import { useContext } from "react";
import { CartContext } from "../utils/CartContext";
import { Link } from "react-router-dom";
import CloseButton from "react-bootstrap/CloseButton";

function CartItem({ product }) {
  const { removeFromCart } = useContext(CartContext);
  return (
    <div className="cart-product align-items-center row py-3">
      <div className="col-1">
        <CloseButton onClick={() => removeFromCart(product.id)} />
      </div>
      <div className="col-md-1 d-none d-lg-block">
        <Link to={`/product/${product.id}`}>
          <img className="cart-img img-fluid" src={product.image.url} alt="product image" />
        </Link>
      </div>
      <div className="col-5 col-md-7">
        <Link className="text-decoration-none" to={`/product/${product.id}`}>
          <p className="m-0 fs-0-75rem-to-1-rem link-text">{product.title}</p>
        </Link>
      </div>
      <div className="col-2 col-md-2 ms-auto">
        <p className="fs-0-75rem-to-1-rem">${product.price}</p>
      </div>
      <div className="col-3 col-sm-2 col-md-1 text-end">
        <p className="fs-0-75rem-to-1-rem">{product.quantity}</p>
      </div>
    </div>
  );
}

export default CartItem;
