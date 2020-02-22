import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import WelcomeVideo from "../LandingPageVideo";

const NavBar = () => {
  return (
    <WelcomeVideo>
      <Navbar bg="none" variant="dark">
        <Navbar.Brand href="#home">WORKIE</Navbar.Brand>

        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#home">You</Nav.Link>
          <Nav.Link href="#features">Blog</Nav.Link>
          <Nav.Link href="#pricing">About</Nav.Link>
        </Nav>

        <Button variant="outline-dark" style={{ border: "1px solid #5e3a44" }}>
          Get started
        </Button>
      </Navbar>
    </WelcomeVideo>
  );
};
export default NavBar;
