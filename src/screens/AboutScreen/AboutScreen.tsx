import React from "react";
import DefaultImage from "../../components/reusableComponents/Image";
import AboutUsContainer from "../../components/AboutPage/AboutUsContainer";

const AboutScreen = () => {
  return (
    <>
      <AboutUsContainer image />
      <AboutUsContainer />
      <DefaultImage />
    </>
  );
};

export default AboutScreen;
