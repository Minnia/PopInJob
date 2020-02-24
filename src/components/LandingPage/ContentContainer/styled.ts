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

export const ContentImage = styled.img`
  max-width: 50%;
  max-height: 70%;
`;

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40vw;
  color: white;
`;
