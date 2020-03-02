import React from "react";
import {
  FooterContainer,
  ContactInformation,
  ContactInformationHeader,
  ContactInformationAddress,
  Hours,
  SocialMediaInformation,
  HoursInformation
} from "./styled";

const Footer = () => {
  return (
    <FooterContainer>
      <ContactInformation>
        <ContactInformationHeader>Contact Us</ContactInformationHeader>
        <ContactInformationAddress>123 Example Road</ContactInformationAddress>
        <ContactInformationAddress>
          New York, NY 12345
        </ContactInformationAddress>
        <ContactInformationAddress>email@example.com</ContactInformationAddress>
        <ContactInformationAddress>555-555 555</ContactInformationAddress>
      </ContactInformation>
      <Hours>
        Hours
        <HoursInformation>Monday-Friday</HoursInformation>
        <HoursInformation>8-17</HoursInformation>
      </Hours>

      <SocialMediaInformation>Follow</SocialMediaInformation>
    </FooterContainer>
  );
};

export default Footer;
