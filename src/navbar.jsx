import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";
import logo from "./logo.png";
import "./navbar.css";

function CustomNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="home" spy={true} smooth={true} duration={500}>
        <img src={logo} alt="logo" width="150px" className="logo" />
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        style={{ marginRight: "20px" }}
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="home" spy={true} smooth={true} duration={500}>
            Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="sobre"
            spy={true}
            smooth={true}
            duration={500}
          >
            Sobre
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
