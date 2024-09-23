function CartSum() {
  return (
    <div className="cart-sum">
      <div className="row cart-top-border pt-3">
        <div className="col-2">
          <p className="fw-bold fs-1-to-1-125">Total</p>
        </div>
        <div className="col-2 col-md-2 ms-auto">
          <p className="fs-0-75rem-to-1-rem fw-bold">$225</p>
        </div>
        <div className="col-3 col-sm-2 col-md-1 text-end">
          <p className="fs-0-75rem-to-1-rem fw-bold">3 items</p>
        </div>
      </div>
    </div>
  );
}

export default CartSum;
