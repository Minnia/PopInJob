import styled from "styled-components";
import constants from "../../../constants";

export const YourJourneySteps = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 0 16px 8px;
  color: ${constants.colors.redCurrant};
`;

export const StepsTitle = styled.h2`
  font-weight: bold;
  color: ${constants.colors.redCurrant};
`;

export const StepsDescription = styled.p`
  font-size: 16px;
  color: black;
`;
