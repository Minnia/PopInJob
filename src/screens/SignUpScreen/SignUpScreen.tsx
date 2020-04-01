import React from "react";
import SignupCustomer from "../../components/SignupPage/SignupCustomer";
import Navbar from "../../components/reusableComponents/Navbar";

import { Titel, ContntDiv } from "./styled";

const SignUpScreen = () => {
  return (
    <div>
      <Navbar />

      <ContntDiv>
        <SignupCustomer />
      </ContntDiv>
    </div>
  );
};

export default SignUpScreen;
