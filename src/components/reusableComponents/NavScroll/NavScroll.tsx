import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import WelcomeVideo from "../../../components/LandingPage/LandingPageVideo";
import { NavBarContainer } from "./styled";

import Scroll from 'react-scroll';

var scroll = require('react-scroll');
var scroll = Scroll.animateScroll;

scroll.scrollToTop();

scroll.scrollToBottom();


var scroller = Scroll.scroller;

scroller.scrollTo('YourJourney', {
  duration: 1500,
  delay: 100,
  smooth: true,
  offset: 50
})

scroller.scrollTo('ContentContainer', {
  duration: 1500,
  delay: 100,
  smooth: true,
  offset: 50
})

scroller.scrollTo('CollaboratingCompanies', {
  duration: 1500,
  delay: 100,
  smooth: true,
  offset: 50
})

scroller.scrollTo('NewsLetterBox', {
  duration: 1500,
  delay: 100,
  smooth: true,
  offset: 50
})

scroller.scrollTo('UserStatistics', {
  duration: 1500,
  delay: 100,
  smooth: true,
  offset: 50
})

scroller.scrollTo('AboutUsContainer', {
  duration: 1500,
  delay: 100,
  smooth: true,
  offset: 50
})

const NavScroll = () => {
  return (
    <div>
     
        
          <Navbar bg="none" variant="dark">
            <Nav>   
              <Nav.Link onClick={() => scroll.scrollToBottom()}>
                To Bottom
              </Nav.Link>
              
              <Nav.Link onClick={() => scroller.scrollTo("YourJourney")}>
                To Journey
              </Nav.Link>

              <Nav.Link onClick={() => scroller.scrollTo("ContentContainer")}>
                To Content Container
              </Nav.Link>
            
              <Nav.Link onClick={() => scroller.scrollTo("CollaboratingCompanies")}>
                To Collaborating Companies
              </Nav.Link>

              <Nav.Link onClick={() => scroller.scrollTo("NewsLetterBox")}>
                To News Letter
              </Nav.Link>

              <Nav.Link onClick={() => scroller.scrollTo("UserStatistics")}>
                To Statistics
              </Nav.Link>

              <Nav.Link onClick={() => scroller.scrollTo("AboutUsContainer")}>
                To About
              </Nav.Link>
            </Nav>
          </Navbar>
        
      
    </div>
  );
};
export default NavScroll;