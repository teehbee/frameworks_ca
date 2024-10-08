import React from "react";

function ProductPrice({ price, discountedPrice }) {
  const priceDifference = (price - discountedPrice).toFixed(2);
  return (
    <>
      {price !== discountedPrice && <span style={{ textDecoration: "line-through", marginRight: "8px" }}>NOK {price}</span>}
      <span>NOK {discountedPrice}</span>
      {priceDifference > 0 && <p className="text-danger pt-2 m-0 fw-bold">SAVE NOK {priceDifference}</p>}
    </>
  );
}

export default ProductPrice;
