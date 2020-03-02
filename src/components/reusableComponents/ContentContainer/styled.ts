import styled from "styled-components";
import constants from "../../../constants";

export const ContentContainerDiv = styled.div`
  height: 500px;
  width: 100vw;
  background-color: ${constants.colors.landingPagePurple};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 16px 0;
`;

export const ContentImage = styled.img.attrs({
  src: "./images/Smiling_At_work.png"
})`
  max-width: 100%;
  max-height: 70%;
`;

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40vw;
  color: white;
`;

export const ContentTitle = styled.h1`
  margin: 0;
  padding: 48px;
  font-weight: bold;
  color: white;
`;
