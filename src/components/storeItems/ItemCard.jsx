import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ProductPrice from "../ProductPrice";

function ItemCard({ data }) {
  console.log(data);
  return (
    <>
      {data.map((product) => (
        <div key={product.id} className="col-12 col-md-6 col-lg-4 col-xl-3 mx-auto mb-3">
          <Card className="product-card">
            <Link to={`product/${product.id}`}>
              <Card.Img variant="top" className="item-card-img img-fluid mx-auto card-image" src={product.image.url} />
            </Link>
            <Card.Body>
              <Link className="card-link" to={`product/${product.id}`}>
                <Card.Title className="fs-0-875-to-1-25-re link-text green-font-color">{product.title}</Card.Title>
              </Link>
              <div className="fs-0-75rem-to-1-rem font-weight-500">
                <ProductPrice price={product.price} discountedPrice={product.discountedPrice} />
              </div>
              <Button className="add-to-cart-button green-button fs-0-75rem-to-1-rem py-2 px-3 px-sm-4 px-md-4 px-xl-4 mt-3">Add to cart</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </>
  );
}

export default ItemCard;
