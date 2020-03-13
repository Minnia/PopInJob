import React from "react";
import {
  InputFeiled,
  Text,
  Tital,
  SignupButton,
  ComponentContaner,
  RowObjects,
  Logindiv,
  CheckBox
  
  } from "./styled";

import { Container, FormCheck } from "react-bootstrap";
import Form from "react-bootstrap/Form";




const LoginEmployer = () => {
  return (
    
  <>
    <ComponentContaner>
      <Tital>Signup page</Tital>
    
      <Logindiv>
          
        <Text>Your email</Text>      
        <InputFeiled/>
          
        <Text>Password</Text>
        <InputFeiled/>

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

        <SignupButton> Sign in </SignupButton>
    
      </Logindiv>
    </ComponentContaner>
  </>
  );
};

export default LoginEmployer;