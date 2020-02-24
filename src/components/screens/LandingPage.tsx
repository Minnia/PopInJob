import React from "react";
import Background from "../LandingPageBackground";
import NavBar from "../reusableComponents/Navbar";
import ContentContainer from "../ContentContainer";
import CollaboratingCompanies from "../CollaboratingCompanies";

const LandingPage = () => {
  return (
    <Background>
      <NavBar />
      <ContentContainer />
      <CollaboratingCompanies />
    </Background>
  );
};

export default LandingPage;
