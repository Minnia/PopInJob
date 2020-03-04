import styled from "styled-components";

export const StyledDiv = styled.div`
  height: 500px;
  width: 100vw;
  display: block;
  background: url("./images/office-picture.jpeg") no-repeat center center fixed;
  background-size: cover;
`;

export const WhiteBackground = styled(StyledDiv)`
  background: white;
  background-size: cover;
`;
