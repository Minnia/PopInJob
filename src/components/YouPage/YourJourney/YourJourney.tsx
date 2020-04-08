import React from "react";
import { YourJourneySteps, StepsTitle, StepsDescription } from "./styled";
import { Element } from "react-scroll";
import Title from "../../reusableComponents/Title";
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
      <YourJourneySteps>
        <YourJourneySteps>
          <StepsTitle>1- Submit your resumé</StepsTitle>
          <StepsDescription>
            At PopInJob, we want to make sure you can build your network in
            order to create your own success
          </StepsDescription>
        </YourJourneySteps>
        <YourJourneySteps>
          <StepsTitle>2- Get contacted</StepsTitle>
          <StepsDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id
            ultricies metus, nec ornare dui. Nullam accumsan risus sapien, sed
            finibus sem feugiat id.
          </StepsDescription>
        </YourJourneySteps>
        <YourJourneySteps>
          <StepsTitle>3- Interview</StepsTitle>
          <StepsDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id
            ultricies metus, nec ornare dui. Nullam accumsan risus sapien, sed
            finibus sem feugiat id.
          </StepsDescription>
        </YourJourneySteps>
        <YourJourneySteps>
          <StepsTitle>4- Time for work!</StepsTitle>
          <StepsDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id
            ultricies metus, nec ornare dui. Nullam accumsan risus sapien, sed
            finibus sem feugiat id.
          </StepsDescription>
        </YourJourneySteps>
      </YourJourneySteps>
    </Element>
  );
};

export default YourJourney;
