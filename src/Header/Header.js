import React from "react";
import { Container, Navbar, Nav, Button, Form } from "react-bootstrap";
import "./Header.css";

export default function Header({ count }) {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
      <Container className="px-4 px-lg-5">
        <Navbar.Brand>Shoppify</Navbar.Brand>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Navbar.Collapse
          id="navbarSupportedContent"
          className="justify-content-between"
        >
          <Nav className="me-auto me-auto mb-2 mb-lg-0 ms-lg-4">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>About</Nav.Link>
          </Nav>

          <Form className="d-flex">
            <Button className="btn text-white" variant="outline-secondary">
              <i className="bi-cart-fill me-1"></i>
              Cart
              <span className="badge bg-dark text-white ms-1 rounded-pill">
                {count}
              </span>
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
