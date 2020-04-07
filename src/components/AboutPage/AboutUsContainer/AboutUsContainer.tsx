import React from "react";
import { InformationContainer, AboutContainer } from "./styled";
import AboutUsImage from "../AboutUsImage";
import AboutSubCard from "../AboutSubCard";
import {scroller} from "react-scroll";

scroller.scrollTo('AboutUs', {
  duration: 1500,
  delay: 100,
  smooth: true,
  containerId: 'AboutUsContainer',
  offset: 50
})

const AboutUsContainer = () => {
  return (
    <>
      <AboutContainer>
        <InformationContainer>
          Aenean bibendum sapien augue, in egestas sapien semper eget. Nulla
          vitae convallis lorem. Etiam scelerisque augue non tortor consectetur
          venenatis. Sed finibus at nisl quis varius. Donec dignissim ipsum
          lacus, id tincidunt sapien molestie vel. Aliquam bibendum eros vitae
          tincidunt tempor. Curabitur nec enim tincidunt, ultricies libero quis,
          luctus est. Morbi id tristique tortor. Fusce id pharetra sapien, at
          scelerisque ante. Fusce massa velit, bibendum a orci in, blandit
          rutrum ipsum. Vestibulum augue lectus, varius ut magna a, molestie
          gravida erat.
        </InformationContainer>
        <AboutUsImage />
      </AboutContainer>
    
      <AboutSubCard/>
    </>
  );
};
export default AboutUsContainer;
