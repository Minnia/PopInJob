import React from "react";
import { StyledDiv, WhiteBackground } from "./styled";

type Props = {
  video?: boolean;
  children: any;
};

export const WelcomeVideo = ({ children, video }: Props) => {
  return video ? (
    <StyledDiv>{children}</StyledDiv>
  ) : (
    <WhiteBackground>{children}</WhiteBackground>
  );
};

export default WelcomeVideo;
