import React from "react";
import AboutUsContainer from "../AboutUsContainer";
import NavBar from "../../reusableComponents/Navbar";
import CollaboratingCompanies from "../../LandingPage/CollaboratingCompanies";
import DefaultImage from "../../reusableComponents/Image";
import Footer from "../../reusableComponents/Footer";

const AboutScreen = () => {
  return (
    <>
      {/* <NavBar /> */}
      <AboutUsContainer image />
      <AboutUsContainer />
      {/* <CollaboratingCompanies /> */}
      <DefaultImage />
      {/* <Footer /> */}
    </>
  );
};

export default AboutScreen;
