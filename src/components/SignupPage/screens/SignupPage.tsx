import React from "react";
import LoginEmployee from "../SignupEmployee";
import LoginEmployer from "../SignupEmployer";
import Navbar from "../../reusableComponents/Navbar";
import Footer from "../../reusableComponents/Footer";

import { Titel, ContntDiv } from "./styled";

const LoginPage = () => {
  return (
    <div>
      <Navbar/>

      <Titel> Welcome to Login page</Titel>

      <ContntDiv >

        <LoginEmployer/>
      
      </ContntDiv>

    </div>
  );
};

export default LoginPage;