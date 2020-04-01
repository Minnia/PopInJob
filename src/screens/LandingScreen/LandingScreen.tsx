import React from "react";
import Background from "../../components/LandingPage/LandingPageBackground";
import NavBar from "../../components/reusableComponents/Navbar";
import ContentContainer from "../../components/reusableComponents/ContentContainer";
import CollaboratingCompanies from "../../components/LandingPage/CollaboratingCompanies";
import NewsLetterBox from "../../components/LandingPage/NewsLetterBox";
import UserStatistics from "../../components/LandingPage/UserStatistics";
import Footer from "../../components/reusableComponents/Footer";
import SigninComponet from "../../components/LandingPage/SignupComponent";

const LandingPage = () => {
  return (
    <Background>
      <NavBar />
      <SigninComponet />
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
