import React from "react";

import Background from "../../components/LandingPage/LandingPageBackground";
import NavBar from "../../components/reusableComponents/Navbar";
import ContentContainer from "../../components/reusableComponents/ContentContainer";
import CollaboratingCompanies from "../../components/LandingPage/CollaboratingCompanies";
import NewsLetterBox from "../../components/LandingPage/NewsLetterBox";
import UserStatistics from "../../components/LandingPage/UserStatistics";
import Footer from "../../components/reusableComponents/Footer";
import SigninComponet from "../../components/LandingPage/SignupComponent";

import AboutUsContainer from "../../components/AboutPage/AboutUsContainer";
import YourJourney from "../../components/YouPage/YourJourney";

import NavScorll from "../../components/reusableComponents/NavScroll";

import Scroll from 'react-scroll';
import {Link, Element} from 'react-scroll'

var scroll = require('react-scroll');
var scroll = Scroll.animateScroll;



const LandingPage = () => {

  return (
    <Background>
      <NavBar />
      <NavScorll/>
      

      <br/>
      <SigninComponet />
      
      <hr/>
      
      <Element name = "YourJourney"> 
        <YourJourney />
      </Element>
      
      <hr/>
      <Element name = "ContentContainer">
        <ContentContainer
          contentText={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id
            ultricies metus, nec ornare dui. Nullam accumsan risus sapien, sed
            finibus sem feugiat id. Praesent vehicula, tellus at sagittis posuere,
            mauris ligula ornare massa, pharetra efficitur est mi a nisi. Aenean
            est elit, elementum a orci nec, tempus maximus erat. Mauris mattis
            sapien orci, at sagittis nibh auctor sed. Donec in erat a dolor
            commodo placerat id non quam. Sed ac tellus at orci pellentesque
            iaculis sit amet in sem.`}
        />
        
        <ContentContainer
          reverse
          contentText={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id
            ultricies metus, nec ornare dui. Nullam accumsan risus sapien, sed
            finibus sem feugiat id. Praesent vehicula, tellus at sagittis posuere,
            mauris ligula ornare massa, pharetra efficitur est mi a nisi. Aenean
            est elit, elementum a orci nec, tempus maximus erat. Mauris mattis
            sapien orci, at sagittis nibh auctor sed. Donec in erat a dolor
            commodo placerat id non quam. Sed ac tellus at orci pellentesque
            iaculis sit amet in sem.`}
        />
      </Element>

      <Element name = "CollaboratingCompanies">
        <CollaboratingCompanies />
      </Element>

      <Element name = "NewsLetterBox">
        <NewsLetterBox />
      </Element>

      <Element name = "UserStatistics">
        <UserStatistics />
      </Element>
     
      <hr/>
      
      <Element name = "AboutUsContainer">
        <AboutUsContainer />
      </Element>

      <h1><Link onClick={() => scroll.scrollToTop()}>Scroll To Top</Link></h1>
      <Footer />
    </Background>
  );
};

export default LandingPage;
