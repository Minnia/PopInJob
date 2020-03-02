import styled from "styled-components";
import constants from "../../../constants";

export const FooterContainer = styled.div`
  height: 300px;
  width: 100vw;
  padding-top: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: space-around;
`;

export const ContactInformation = styled.div`
  height: 250px;
  width: 40vw;
`;

export const ContactInformationHeader = styled.h1`
  color: ${constants.colors.redCurrant};
`;

export const ContactInformationAddress = styled.p`
  font-size: 15px;
  color: grey;
`;

export const Hours = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${constants.colors.redCurrant};
`;

export const SocialMediaInformation = styled(Hours)``;

export const HoursInformation = styled(ContactInformationAddress)`
  font-weight: normal;
`;
