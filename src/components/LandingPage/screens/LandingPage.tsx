import React from "react";
import Background from "../LandingPageBackground";
import NavBar from "../../reusableComponents/Navbar";
import ContentContainer from "../ContentContainer";
import CollaboratingCompanies from "../CollaboratingCompanies";
import NewsLetterBox from "../NewsLetterBox";
import UserStatistics from "../UserStatistics";
import Footer from "../Footer";

const LandingPage = () => {
  return (
    <Background>
      <NavBar />
      <ContentContainer />
      <CollaboratingCompanies />
      <NewsLetterBox />
      <UserStatistics />
      <Footer />
    </Background>
  );
};

export default LandingPage;
