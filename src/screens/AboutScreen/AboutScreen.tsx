import React from "react";
import DefaultImage from "../../components/reusableComponents/Image";
import AboutUsContainer from "../../components/AboutPage/AboutUsContainer";

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
