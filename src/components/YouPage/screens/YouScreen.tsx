import React from "react";
import Navbar from "../../reusableComponents/Navbar";
import YourJourney from "../YourJourney";
import Footer from "../../reusableComponents/Footer";
import ContentContainer from "../../reusableComponents/ContentContainer";

const YouScreen = () => {
  return (
    <>
      <Navbar />
      <YourJourney />

      <ContentContainer reverse title={`Start your journey here.`} />

      <Footer />
    </>
  );
};
export default YouScreen;
