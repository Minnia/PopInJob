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
        <ContactInformationAddress style={{ fontWeight: "bold" }}>
          Address
        </ContactInformationAddress>
        <ContactInformationAddress>
          Malmskillnadsgatan 32
        </ContactInformationAddress>
        <ContactInformationAddress>Stockholm</ContactInformationAddress>
        <ContactInformationAddress>info@antler.co</ContactInformationAddress>
        {/* <ContactInformationAddress>555-555 555</ContactInformationAddress> */}
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
