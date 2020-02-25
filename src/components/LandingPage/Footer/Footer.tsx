import React from "react";
import {
  FooterContainer,
  ContactInformation,
  ContactInformationHeader,
  ContactInformationAddress
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
      <div>Hours</div>

      <div>Follow</div>
    </FooterContainer>
  );
};

export default Footer;
