import React from "react";
import SignupCustomer from "../SignupCustomer/SignupCustomer";
import Navbar from "../../reusableComponents/Navbar";

import { Titel, ContntDiv } from "./styled";

const LoginPage = () => {
  return (
    <div>
      <Navbar/>

      <ContntDiv>

        <SignupCustomer/>
      
      </ContntDiv>

    </div>
  );
};

export default LoginPage;