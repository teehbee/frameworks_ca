import React from "react";

function ProductPrice({ price, discountedPrice }) {
  return (
    <div>
      {price !== discountedPrice && <span style={{ textDecoration: "line-through", marginRight: "8px" }}>NOK {price}</span>}
      <span>NOK {discountedPrice}</span>
    </div>
  );
}

export default ProductPrice;
