import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import WelcomeVideo from "../../../components/LandingPage/LandingPageVideo";
import { NavBarContainer } from "./styled";

const NavBar = () => {
  return (
    <WelcomeVideo>
      <NavBarContainer>
        <Navbar bg="none" variant="dark">
          <Navbar.Brand
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start"
            }}
            href="/"
          >
            WORKIE
          </Navbar.Brand>

          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/you">You</Nav.Link>
            <Nav.Link href="#features">Blog</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
          <Button className="navbarButton" variant="outline-dark">
            Get started
          </Button>
        </Navbar>
      </NavBarContainer>
    </WelcomeVideo>
  );
};
export default NavBar;
