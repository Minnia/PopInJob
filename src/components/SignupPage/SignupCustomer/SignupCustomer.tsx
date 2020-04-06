import React from "react";
import {
  InputFeiled,
  Text,
  Tital,
  SignupButton,
  ComponentContaner,
  RowObjects,
  SignDiv,
  CheckBox
  
  } from "./styled";

import { Container, FormCheck } from "react-bootstrap";
import Form from "react-bootstrap/Form";




const SignupCustomer = () => {
  return (
    
  <>
    <ComponentContaner>
      <Tital>Signup page</Tital>
    
      <SignDiv>
          
        <Text>Your email</Text>      
        <InputFeiled/>
          
        <Text>Password</Text>
        <InputFeiled type="password"/>

        <Text>Confurm Password</Text>
        <InputFeiled type="password" />

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
    
      </SignDiv>
    </ComponentContaner>
  </>
  );
};

export default SignupCustomer;