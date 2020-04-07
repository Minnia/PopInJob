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

import Scroll from 'react-scroll';
import {Link, Element} from 'react-scroll'

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


const LandingPage = () => {

  return (
    <Background>
      <NavBar />
      
      <Link onClick={() => scroll.scrollToBottom()}>
        <h1>Scroll To Bottom</h1>
      </Link>
      <br/>
      
      <Link onClick={() => scroller.scrollTo("YourJourney")}>
        <h1>Scroll To Journey</h1>
      </Link>
      <br/>

      <Link onClick={() => scroller.scrollTo("ContentContainer")}>
        <h1>Scroll To Content Container</h1>
      </Link>
      <br/>
     
      <Link onClick={() => scroller.scrollTo("CollaboratingCompanies")}>
        <h1>Scroll To Collaborating Companies</h1>
      </Link>
      <br/>

      <Link onClick={() => scroller.scrollTo("NewsLetterBox")}>
        <h1>Scroll To News Letter</h1>
      </Link>
      <br/>

      <Link onClick={() => scroller.scrollTo("UserStatistics")}>
        <h1>Scroll To Statistics</h1>
      </Link>
      <br/>

      <Link onClick={() => scroller.scrollTo("AboutUsContainer")}>
        <h1>Scroll To About</h1>
      </Link>
      <br/>

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
