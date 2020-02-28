import React from "react";
import { Image, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import "./NavBar.css";

const navbar = props => {
  return (
    <Navbar expand="lg">
      <Navbar.Brand className="NavBrand navbar-default">
        <Image
          className="image"
          src="https://www.vy.no/web-assets/favicons/favicon-512x512.png"
        />
      </Navbar.Brand>
      <Navbar.Toggle className="navbar-toggle" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="Nav">
          <LinkContainer to={"/"} exact>
            <Nav.Item className="NavItem">Spørsmål og Svar</Nav.Item>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default navbar;
