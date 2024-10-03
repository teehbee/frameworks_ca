import React, { useContext, useState } from "react";
import { CartContext } from "../utils/CartContext";
import ProductPrice from "../utils/ProductPrice";
import { cartSmall } from "../../assets/icons";
import Alert from "react-bootstrap/Alert";

function ProductInfo({ product }) {
  const { addToCart } = useContext(CartContext);
  const [showPopup, setShowPopup] = useState(false);

  const HandleAddToCart = (product) => {
    addToCart(product);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <>
      <div className="row">
        <div className="col-12 col-md-6">
          <img className="product-img img-fluid" src={product.image.url} alt="placeholder" />
        </div>
        <div className="product-info-column col-8 col-md-6 mx-auto">
          <div className="ps-md-5">
            <h1 className="pt-4 pt-md-0 fs-1-5-rem-to-2-rem">{product.title}</h1>
            <a className="text-decoration-none" href="#reviews">
              <p className="fs-0-75rem-to-1-rem">Reviews ( {product.reviews.length} )</p>
            </a>
          </div>
          <div className="product-text-box">
            <p className="fs-0-875-to-1-25-rem">{product.description}</p>
          </div>
          <div className="fs-1-to-1-125 font-weight-500 ms-auto mt-auto text-end">
            <ProductPrice price={product.price} discountedPrice={product.discountedPrice} />
          </div>
          <div className="product-page-button-container position-relative mb-3">
            <button onClick={() => HandleAddToCart(product)} className="green-button w-100 mt-3 text-start">
              Add to cart
            </button>
            <img className="cart-button-icon position-absolute" src={cartSmall} alt="" />
          </div>
          <p className="ms-auto mt-2 fs-0-75rem-to-1-rem d-none">Product added to cart</p>
        </div>
      </div>
      {showPopup && (
        <Alert variant="success" className="success-popup fixed-bottom mx-auto w-50">
          Product added to cart
        </Alert>
      )}
    </>
  );
}

export default ProductInfo;
