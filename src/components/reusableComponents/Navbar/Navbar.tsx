import React, { useEffect } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import WelcomeVideo from "../../../components/LandingPage/LandingPageVideo";
import { NavBarContainer } from "./styled";
import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const NavBar = () => {
  useEffect(() => {
    Events.scrollEvent.register("begin", function (to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function (to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();
  });

  return (
    <WelcomeVideo>
      <NavBarContainer>
        <Navbar bg="none" variant="dark">
          <Navbar.Brand
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
            href="/"
          >
            PopInJob
          </Navbar.Brand>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: 200,
            }}
          >
            <Link
              activeClass="active"
              style={{ color: "white", cursor: "pointer" }}
              to="You"
              spy={true}
              smooth={true}
              duration={500}
            >
              You
            </Link>

            <Link
              activeClass="active"
              style={{ color: "white", cursor: "pointer" }}
              to="About"
              spy={true}
              smooth={true}
              duration={500}
            >
              About
            </Link>

            <Link
              activeClass="active"
              style={{ color: "white", cursor: "pointer" }}
              to="Contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </div>
        </Navbar>
      </NavBarContainer>
    </WelcomeVideo>
  );
};
export default NavBar;
