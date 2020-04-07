import React from "react";
import {
  InputFeiled,
  Text,
  Tital,
  LoginButton,
  ComponentContaner,
  RowObjects,
  LoginDiv,
  CheckBox
  
  } from "./styled";

import { Container, FormCheck } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const LoginCustomer = () => {
  return (
    
  <>
    <ComponentContaner>
      <Tital>Login page</Tital>
    
      <LoginDiv>
          
        <Text>Your email</Text>      
        <InputFeiled/>
          
        <Text>Password</Text>
        <InputFeiled type="password"/>

        <CheckBox>
          <Form.Check 
          type="radio"
          label="For Employer"
          name="WorkOrWorker"
          id="WorkOrWorker1"
          />
          
          <Form.Check
          type="radio"
          label="For Employee"
          name="WorkOrWorker"
          id="WorkOrWorker2"
          />
        
        </CheckBox>

        <LoginButton> Login </LoginButton>
    
      </LoginDiv>
    </ComponentContaner>
  </>
  );
};

export default LoginCustomer;