function CartHeader() {
  return (
    <div className="row pt-5 cart-bottom-border">
      <div className="col-5 col-md-9">
        <p className="fw-bold fs-0-75rem-to-1-rem">Product</p>
      </div>
      <div className="col-2 col-md 1 ms-auto">
        <p className="fw-bold fs-0-75rem-to-1-rem">Price</p>
      </div>
      <div className="col-3 col-sm-2 col-md-1 text-end">
        <p className="fw-bold fs-0-75rem-to-1-rem">Amount</p>
      </div>
    </div>
  );
}

export default CartHeader;
