import React from "react";
import { Button, Row } from "react-bootstrap";
import {
  LoginButton,
  ButtonContaner,
  LoginTital,
  QuestionTital,
  LoginBackground 
} from "./styled"; 


const LoginComponent = () => {
  return (
  <LoginBackground>
      
    <LoginTital>Whanna join</LoginTital>

    <QuestionTital>What are you?</QuestionTital>

    <ButtonContaner>
      
      <LoginButton>
        <h2>Employee</h2>
      </LoginButton>

      <LoginButton>
        <h2>Employer</h2>
      </LoginButton>
    
    </ButtonContaner>
  </LoginBackground>
  );
};

export default LoginComponent;