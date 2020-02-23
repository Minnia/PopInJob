import React from "react";
import Background from "../LandingPageBackground";
import NavBar from "../reusableComponents/Navbar";
import ContentContainer from "../ContentContainer";

const LandingPage = () => {
  return (
    <Background>
      <NavBar />
      <ContentContainer />
    </Background>
  );
};

export default LandingPage;
