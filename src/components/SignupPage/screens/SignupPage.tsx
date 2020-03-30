import React from "react";
import SignupCustomer from "../SignupCustomer/SignupCustomer";
import Navbar from "../../reusableComponents/Navbar";

import { Titel, ContntDiv } from "./styled";

const SignupPage = () => {
  return (
    <div>
      <Navbar/>

      <ContntDiv>

        <SignupCustomer/>
      
      </ContntDiv>

    </div>
  );
};

export default SignupPage;