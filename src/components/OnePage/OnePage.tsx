import React from "react";
import Navbar from "../reusableComponents/Navbar";
import CollaboratingCompanies from "../LandingPage/CollaboratingCompanies";
import AboutScreen from "../AboutPage/screens";
import Footer from "../reusableComponents/Footer";
import Onboarding from "../reusableComponents/Onboarding";
const OnePage = () => {
  return (
    <>
      <Navbar video />
      <Onboarding />
      <CollaboratingCompanies />
      <AboutScreen />
      <Footer />
    </>
  );
};

export default OnePage;
