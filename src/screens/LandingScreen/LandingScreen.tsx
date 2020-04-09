import React from "react";

import Background from "../../components/LandingPage/LandingPageBackground";
import NavBar from "../../components/reusableComponents/Navbar";
import ContentContainer from "../../components/reusableComponents/ContentContainer";
import CollaboratingCompanies from "../../components/LandingPage/CollaboratingCompanies";
import NewsLetterBox from "../../components/LandingPage/NewsLetterBox";
import Footer from "../../components/reusableComponents/Footer";
import SignupComponent from "../../components/LandingPage/SignupComponent";
import AboutUsContainer from "../../components/AboutPage/AboutUsContainer";
import YourJourney from "../../components/YouPage/YourJourney";
import Scroll from "react-scroll";
import { Link, Element } from "react-scroll";

var scroll = require("react-scroll");
var scroll = Scroll.animateScroll;

const LandingPage = () => {
  return (
    <Background>
      <NavBar />

      <br />
      <SignupComponent />

      <hr />

      <Element name="You">
        <YourJourney />
      </Element>

      <hr />
      <Element name="ContentContainer">
        <ContentContainer
          contentText={`  At PopInJob, we want to make sure you can build your network in order to
        create your own success`}
        />
      </Element>

      <Element name="CollaboratingCompanies">
        <CollaboratingCompanies />
      </Element>

      <Element name="NewsLetterBox">
        <NewsLetterBox />
      </Element>

      <Element name="UserStatistics"></Element>

      <hr />

      <Element name="About">
        <AboutUsContainer image />
      </Element>

      <h1>
        <Link onClick={() => scroll.scrollToTop()}>Scroll To Top</Link>
      </h1>
      <Element name="Contact">
        <Footer />
      </Element>
    </Background>
  );
};

export default LandingPage;
