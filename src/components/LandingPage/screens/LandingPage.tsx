import React from "react";
import Background from "../LandingPageBackground";
import NavBar from "../../reusableComponents/Navbar";
import ContentContainer from "../../reusableComponents/ContentContainer";
import CollaboratingCompanies from "../CollaboratingCompanies";
import NewsLetterBox from "../NewsLetterBox";
import UserStatistics from "../UserStatistics";
import Footer from "../../reusableComponents/Footer";
import LoginComponet from "../LoginComponent";

const LandingPage = () => {
  return (
    <Background>
      <NavBar />
      <LoginComponet/>
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
      <Footer />
    </Background>
  );
};

export default LandingPage;
