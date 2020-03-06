import React from "react";
import {
  SubBoxes, 
  SubTitel, 
  SubText, 
  SubBox, 
  SubRows,
  SubButton

} from "./styled" ; 

import { Container } from "react-bootstrap";

const AboutSubCard = () => {
  return(
  <div>
    <Container>
    <SubBoxes>  
      <SubBox>
          <SubTitel>Subscribe</SubTitel>
        
          <SubText>For what users:info</SubText>
        
      <hr/>
        
        <SubText>for haw long</SubText>
        
      <hr/>
        
        <SubText>
          <SubButton>sub naw</SubButton>
        </SubText>
        
      </SubBox>
      </SubBoxes>
    </Container>
  </div>

  );
};
export default AboutSubCard;