import React from "react";
import LoginCustomer from "../../components/LoginPage/LoginCustomer/LoginCustomer";
import Navbar from "../../components/reusableComponents/Navbar";

import { Titel, ContntDiv } from "./styled";

const LoginScreen = () => {
  return (
    <div>
      <Navbar />

      <ContntDiv>
        <LoginCustomer />
      </ContntDiv>
    </div>
  );
};

export default LoginScreen;
