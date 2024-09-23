import CloseButton from "react-bootstrap/CloseButton";
import { CardImage } from "../../assets/img";

function CartItem() {
  return (
    <div className="cart-product align-items-center row py-3">
      <div className="col-1">
        <CloseButton />
      </div>
      <div className="col-md-1 d-none d-lg-block">
        <img className="cart-img img-fluid" src={CardImage} alt="product image" />
      </div>
      <div className="col-5 col-md-7">
        <p className="m-0 fs-0-75rem-to-1-rem link-text">Product name goes here</p>
      </div>
      <div className="col-2 col-md-2 ms-auto">
        <p className="fs-0-75rem-to-1-rem">$75</p>
      </div>
      <div className="col-3 col-sm-2 col-md-1 text-end">
        <p className="fs-0-75rem-to-1-rem">1</p>
      </div>
    </div>
  );
}

export default CartItem;
