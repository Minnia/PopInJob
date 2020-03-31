import React from "react";
import LoginCustomer from "../LoginCustomer/LoginCustomer";
import Navbar from "../../reusableComponents/Navbar";

import { Titel, ContntDiv } from "./styled";

const LoginPage = () => {
  return (
    <div>
      <Navbar/>

      <ContntDiv>

        <LoginCustomer/>
      
      </ContntDiv>

    </div>
  );
};

export default LoginPage;