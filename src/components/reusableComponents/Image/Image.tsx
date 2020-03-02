import React from "react";
import Image from "react-bootstrap/Image";
import { ImageContainer } from "./styled";

const DefaultImage = () => {
  const imageSource = require("../../../../src/assets/images/Agenda_2030.png");
  return (
    <ImageContainer>
      <Image src={imageSource} fluid />
    </ImageContainer>
  );
};

export default DefaultImage;
