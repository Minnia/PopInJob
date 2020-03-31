import React from "react";
import { Button, Row } from "react-bootstrap";

import SignupPage from "../../SignupPage/screens";

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";


import {
  SignupButton,
  ButtonContaner,
  SignupTital,
  QuestionTital,
  SignupBackground 
} from "./styled"; 


const SignupComponent = () => {
  return (
  <SignupBackground>
      
    <SignupTital>Wanna join</SignupTital>

    <QuestionTital>You can join as an employer or an employee below</QuestionTital>

    <ButtonContaner>
         
      <Link to="../../screens/SignupPage" > 
          <SignupButton renderAs="button">
          
            <h2>Sign up</h2>
            
          </SignupButton>
      </Link>

      <Link to="../../screens/LoginPage" > 
          <SignupButton renderAs="button">
          
            <h2>Login</h2>
            
          </SignupButton>
      </Link>


    </ButtonContaner>
  </SignupBackground>
  );
};

export default SignupComponent;