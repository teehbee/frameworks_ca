import React from "react";
import ProductInfo from "../components/productPage/ProductInfo";
import ReviewBox from "../components/productPage/reviewBox";

function Product() {
  return (
    <div className="container text-center py-5">
      <div className="loader mx-auto mt-5 d-none"></div>
      <p className="error-text text-danger fw-medium pt-3 d-none">Something went wrong. Please try again later. </p>
      <ProductInfo />
      <div id="reviews" className="reviews pt-4 pt-md-5">
        <h2 className="fs-1-5-rem-to-2-rem">User reviews</h2>
        <ReviewBox />
        <ReviewBox />
        <ReviewBox />
      </div>
    </div>
  );
}

export default Product;
