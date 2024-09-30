import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartProvider, { CartContext } from "../utils/CartContext";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ProductPrice from "../utils/ProductPrice";

function ItemCard({ data }) {
  const { addToCart } = useContext(CartContext);
  return (
    <>
      {data.map((product) => (
        <div key={product.id} className="col-12 col-md-6 col-lg-4 col-xl-3 mx-auto mb-3">
          <Card className="product-card">
            <Link to={`product/${product.id}`}>
              <Card.Img variant="top" className="item-card-img img-fluid mx-auto card-image pt-2" src={product.image.url} />
            </Link>
            <Card.Body className="card-body d-flex flex-column justify-content-between">
              <Link className="card-link" to={`product/${product.id}`}>
                <Card.Title className="fs-0-875-to-1-25-re link-text green-font-color">{product.title}</Card.Title>
              </Link>
              <div>
                <div className="fs-0-75rem-to-1-rem font-weight-500">
                  <ProductPrice price={product.price} discountedPrice={product.discountedPrice} />
                </div>
                <Button onClick={() => addToCart(product)} className="add-to-cart-button green-button fs-0-75rem-to-1-rem py-2 px-3 px-sm-4 px-md-4 px-xl-4 mt-3 w-100">
                  Add to cart
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      ))}
    </>
  );
}

export default ItemCard;
