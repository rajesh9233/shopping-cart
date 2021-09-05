import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Product.css";

export default function Product({ product, handleCart }) {
  const { id, name, img, price, rating, isCart, isSale } = product;
  return (
    <Card className="h-100 mt-3 mb-3 product-card">
      {/* If isSale is true Sale badge will display*/}
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
          <div className={rating >= 1 ? "bi-star-fill" : "bi-star"}></div>
          <div className={rating >= 2 ? "bi-star-fill" : "bi-star"}></div>
          <div className={rating >= 3 ? "bi-star-fill" : "bi-star"}></div>
          <div className={rating >= 4 ? "bi-star-fill" : "bi-star"}></div>
          <div className={rating >= 5 ? "bi-star-fill" : "bi-star"}></div>
        </div>
        <div>
          {/* If offer price is not empty current price will be striked */}
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
        {/* If isCart is true "Remove" button will be displayed, otherwise "Add to Cart" button will be displayed*/}
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
