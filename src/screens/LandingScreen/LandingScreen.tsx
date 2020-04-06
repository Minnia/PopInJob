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

var scroll = Scroll.animateScroll;

scroll.scrollToTop();

scroll.scrollToBottom();



//scroll Element = Scroll.Element;

const LandingPage = () => {

  return (
    <Background>
      <NavBar />
      
      <Link onClick={() => scroll.scrollToBottom()}>Scroll To Bottom</Link>

      <br/>

      <Link onClick={() => scroll.scrollTo(1000)}>Scroll To About</Link>
      

      <SigninComponet />
      
      <hr/>
      
      <YourJourney />
      
      <hr/>
      
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
      <CollaboratingCompanies />
      <NewsLetterBox />
      <UserStatistics />
     
      <hr/>
     
      <AboutUsContainer/>

      <Link onClick={() => scroll.scrollToTop()}>Scroll To Top</Link>
      
      <Footer />
    </Background>
  );
};

export default LandingPage;
