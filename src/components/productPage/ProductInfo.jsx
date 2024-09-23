import React from "react";
import { productImagePlaceholderLG, productImagePlaceholderSM } from "../../assets/img";
import { cartSmall } from "../../assets/icons";

function ProductInfo() {
  return (
    <div className="row">
      <div className="col-12 col-md-6">
        <picture>
          <source media="(min-width: 992px)" srcSet={productImagePlaceholderLG} />
          <img className="img-fluid" src={productImagePlaceholderSM} alt="placeholder" />
        </picture>
      </div>
      <div className="product-info-column col-12 col-md-6">
        <div className="ps-md-5">
          <h1 className="pt-4 pt-md-0 fs-1-5-rem-to-2-rem">Product name</h1>
          <a className="text-decoration-none" href="#reviews">
            <p className="fs-0-75rem-to-1-rem">Read 3 reviews</p>
          </a>
        </div>
        <div className="product-text-box">
          <p className="fs-0-875-to-1-25-rem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="product-page-button-container mt-auto position-relative mb-3">
          <button className="green-button w-100 mt-3 text-start">Add to cart</button>
          <img className="cart-button-icon position-absolute" src={cartSmall} alt="" />
        </div>
        <p className="ms-auto mt-2 fs-0-75rem-to-1-rem d-none">Product added to cart</p>
      </div>
    </div>
  );
}

export default ProductInfo;
