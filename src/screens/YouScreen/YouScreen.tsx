import React from "react";
import Navbar from "../../components/reusableComponents/Navbar";
import YourJourney from "../../components/YouPage/YourJourney";
import Footer from "../../components/reusableComponents/Footer";
import ContentContainer from "../../components/reusableComponents/ContentContainer";

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
