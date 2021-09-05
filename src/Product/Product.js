import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Product.css";

export default function Product({ product, handleCart }) {
  const { id, name, img, price, isCart, isSale } = product;
  return (
    <Card className="h-100 mt-3 mb-3">
      {isSale ? (
        <div
          className="badge bg-dark text-white position-absolute"
          style={{ top: "0.5rem", right: "1rem" }}
        >
          Sale
        </div>
      ) : (
        ""
      )}
      <Card.Body className="text-center p4">
        <img
          src={img}
          alt="product img"
          className="card-img-top"
          style={{ width: "auto", height: "200px" }}
        />
        <h5 className="ft-bolder mt-3">{name}</h5>
        <div className="d-flex justify-content-center small text-warning mb-2">
          <div className="bi-star-fill"></div>
          <div className="bi-star-fill"></div>
          <div className="bi-star-fill"></div>
          <div className="bi-star-fill"></div>
          <div className="bi-star"></div>
        </div>
        <div>
          {price.offer ? (
            <>
              <span className="text-muted text-decoration-line-through">
                {price.current}
              </span>{" "}
              {price.offer}
            </>
          ) : (
            price.current
          )}
        </div>
      </Card.Body>
      <Card.Footer className="p-4 pt-0 border-top-0 background-transparent text-center">
        <Button
          variant="dark"
          className="mt-auto"
          onClick={() => handleCart(id)}
        >
          {isCart ? "Remove" : "Add to Cart"}
        </Button>
      </Card.Footer>
    </Card>
  );
}
