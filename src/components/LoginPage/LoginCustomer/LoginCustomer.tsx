import React from "react";
import {
  InputFeiled,
  Text,
  Tital,
  LoginButton,
  ComponentContaner,
  RowObjects,
  Logindiv,
  CheckBox
  
  } from "./styled";

import { Container, FormCheck } from "react-bootstrap";
import Form from "react-bootstrap/Form";




const LoginCustomer = () => {
  return (
    
  <>
    <ComponentContaner>
      <Tital>Login page</Tital>
    
      <Logindiv>
          
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
    
      </Logindiv>
    </ComponentContaner>
  </>
  );
};

export default LoginCustomer;