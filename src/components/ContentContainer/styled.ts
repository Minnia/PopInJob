import styled from "styled-components";
import constants from "../../constants";

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
  height: 60vh;
  width: 30vw;
  background-color: blue;
`;

export const ContentText = styled(ContentImage)`
  width: 40vw;
  background-color: red;
`;
