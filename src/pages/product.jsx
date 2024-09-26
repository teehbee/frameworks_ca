import React from "react";
import { useProduct } from "../api/product";
import ProductInfo from "../components/productPage/ProductInfo";
import ReviewBox from "../components/productPage/ReviewBox";

function Product() {
  const { data, isLoading, isError } = useProduct();
  console.log(data);

  if (isLoading) {
    return <div className="loader mx-auto my-5"></div>;
  }

  if (isError) {
    return <p className="error-text text-danger fw-medium pt-3">There was a problem filling the store. Please try again later.</p>;
  }

  if (!data) {
    return <div>No product data</div>;
  }

  return (
    <div className="container text-center py-5">
      <ProductInfo product={data} />
      <div id="reviews" className="reviews pt-4 pt-md-5">
        <h2 className="fs-1-5-rem-to-2-rem">User reviews</h2>
        <ReviewBox />
      </div>
    </div>
  );
}

export default Product;
