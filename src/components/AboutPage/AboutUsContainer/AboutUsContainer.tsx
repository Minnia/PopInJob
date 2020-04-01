import React from "react";
import { InformationContainer, AboutContainer } from "./styled";
import AboutUsImage from "../AboutUsImage";

type Props = {
  image?: boolean;
  width?: number;
};

const AboutUsContainer = ({ image }: Props) => {
  return image ? (
    <>
      <AboutContainer>
        <InformationContainer>
          With over 10 years of experience within staffing & recruitment firms
          in the Worlds largest HR consultancies, Adecco & Randstad, we feel
          confident in now taking the next step to digitalise the staffing
          process. We have great knowledge and awareness in the hidden talent
          that hasn’t been able to receive their dream job..
        </InformationContainer>
        <AboutUsImage />
      </AboutContainer>

      <AboutSubCard />
    </>
  ) : (
    <AboutContainer>
      <InformationContainer>
        With over 10 years of experience within staffing & recruitment firms in
        the Worlds largest HR consultancies, Adecco & Randstad, we feel
        confident in now taking the next step to digitalise the staffing
        process. We have great knowledge and awareness in the hidden talent that
        hasn’t been able to receive their dream job.
      </InformationContainer>
    </AboutContainer>
  );
};
export default AboutUsContainer;
