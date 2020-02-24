import React from "react";
import { StyledDiv } from "./styled";

export const WelcomeVideo = ({ children }) => {
  const LandingPagePicture = require("../../assets/images/office-picture.jpeg");
  return <StyledDiv>{children}</StyledDiv>;
};

export default WelcomeVideo;
