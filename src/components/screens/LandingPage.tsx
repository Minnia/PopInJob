import React from "react";
import Background from "../LandingPageBackground";
import NavBar from "../reusableComponents/Navbar";
import ContentContainer from "../ContentContainer";
import CollaboratingCompanies from "../CollaboratingCompanies";
import NewsLetterBox from "../NewsLetterBox";

const LandingPage = () => {
  return (
    <Background>
      <NavBar />
      <ContentContainer />
      <CollaboratingCompanies />
      <NewsLetterBox />
    </Background>
  );
};

export default LandingPage;
