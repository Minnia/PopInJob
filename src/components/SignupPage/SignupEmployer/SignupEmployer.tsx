import React from "react";
import {
  InputFeiled,
  Text,
  Tital,
  SignupButton,
  ComponentContaner,
  RowObjects,
  Logindiv
  
  } from "./styled";

import { Container, FormCheck } from "react-bootstrap";
import { InputGroupCheckbox } from "react-bootstrap/InputGroup";




const LoginEmployer = () => {
  return (
    
  <>
    <ComponentContaner>
      <Tital>Signup Eployer</Tital>
    
      <Logindiv>
          
        <Text>Your email</Text>      
        <InputFeiled/>
          
        <Text>Password</Text>
        <InputFeiled/>
      

        <SignupButton> Sign in </SignupButton>
    
      </Logindiv>
    </ComponentContaner>
  </>
  );
};

export default LoginEmployer;