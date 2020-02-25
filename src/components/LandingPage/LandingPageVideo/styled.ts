import styled from "styled-components";

export const StyledDiv = styled.div<{ src?: any }>`
  height: 500px;
  width: 100vw;
  display: block;
  background: url("./images/office-picture.jpeg") no-repeat center center fixed;
  background-size: cover;
`;
