import React from "react";
import { Button } from "react-bootstrap";
import { OnboardingDiv, ButtonDiv } from "./styled";

const Onboarding = () => {
  return (
    <>
      <OnboardingDiv>
        <ButtonDiv>
          <Button variant="light" size="lg">
            Employer
          </Button>
          <Button variant="light" size="lg">
            Employee
          </Button>
        </ButtonDiv>
      </OnboardingDiv>
    </>
  );
};
export default Onboarding;
