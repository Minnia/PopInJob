import styled from "styled-components";
import constants from "../../constants";

export const NavBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: 5vh;
  width: 100vw;
  background: ${constants.colors.workieNavBarColor};
`;
