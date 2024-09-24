import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import useApi from "../../api/products";

function ItemCard({ visibleCount }) {
  const { data, isLoading, isError } = useApi("https://v2.api.noroff.dev/online-shop");

  if (isLoading) {
    return <div className="loader mx-auto mt-5"></div>;
  }

  if (isError) {
    <p className="error-text text-danger fw-medium pt-3">There was a problem filling the store. Please try again later. </p>;
  }

  console.log("fetched data is: ", data);

  return (
    <>
      {data.map((product) => (
        <div key={product.id} className="col-6 col-md-4 col-lg-3 col-xl-2 mx-auto mb-3">
          <Card className="product-card">
            <Link to={`product/${product.id}`}>
              <Card.Img variant="top" className="item-card-img img-fluid mx-auto card-image" src={product.image.url} />
            </Link>
            <Card.Body>
              <Link className="card-link" to={`product/${product.id}`}>
                <Card.Title className="fs-0-75rem-to-1-rem link-text green-font-color">{product.title}</Card.Title>
              </Link>
              <Card.Text className="fs-0-625rem-to-0-75-rem">{product.price}</Card.Text>
              <Button className="add-to-cart-button green-button fs-0-75rem py-2 px-3 px-sm-4 px-md-4 px-xl-5">Add to cart</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </>
  );
}

export default ItemCard;
