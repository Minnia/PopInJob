import React from "react";
import { YourJourneySteps, StepsTitle, StepsDescription } from "./styled";
import { Element } from "react-scroll";
import Title from "../../reusableComponents/Title";
import Image from "../../reusableComponents/Image";
import CVLayout from "../../../assets/svg/CVLayout.svg";
const YourJourney = () => {
  return (
    <Element name="YourJourney">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Title title={`What do I need to do?`} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <YourJourneySteps>
          <StepsTitle>1- Submit your resumé</StepsTitle>

          <img src={CVLayout} height={50} width={50} />
        </YourJourneySteps>
        <YourJourneySteps>
          <StepsTitle>2- Get contacted</StepsTitle>
          <img src={CVLayout} height={50} width={50} />
        </YourJourneySteps>
        <YourJourneySteps>
          <StepsTitle>3- Interview</StepsTitle>
          <img src={CVLayout} height={50} width={50} />
        </YourJourneySteps>
        <YourJourneySteps>
          <StepsTitle>4- Time for work!</StepsTitle>
          <img src={CVLayout} height={50} width={50} />
        </YourJourneySteps>
      </div>
    </Element>
  );
};

export default YourJourney;
