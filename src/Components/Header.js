import React from "react";
import { Container, Navbar, Button, Form } from "react-bootstrap";

export default function Header({ count }) {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
      <Container className="px-4 px-lg-5">
        <Navbar.Brand>Shoppify</Navbar.Brand>
        <Navbar id="navbarSupportedContent" className="justify-content-between">
          <Form className="d-flex">
            <Button className="btn text-white" variant="outline-secondary">
              <i className="bi-cart-fill me-1"></i>
              Cart
              <span className="badge bg-dark text-white ms-1 rounded-pill">
                {count}
              </span>
            </Button>
          </Form>
        </Navbar>
      </Container>
    </Navbar>
  );
}
