import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CardImage } from "../../assets/img";

function ItemCard() {
  return (
    <div className="col-6 col-md-4 col-lg-3 col-xl-2 p-1 mx-auto mb-3">
      <Card className="product-card">
        <Link to="product">
          <Card.Img variant="top" className="mx-auto card-image" src={CardImage} />
        </Link>
        <Card.Body>
          <Link className="card-link " to="product">
            <Card.Title className="fs-0-75rem-to-1-rem link-text green-font-color">Product title</Card.Title>
          </Link>
          <Card.Text className="fs-0-625rem-to-0-75-rem">Price goes here</Card.Text>
          <Button className="add-to-cart-button green-button fs-0-75rem py-2 px-3 px-sm-4 px-md-4 px-xl-5">Add to cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ItemCard;
