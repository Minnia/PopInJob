import React from "react";
import { 
  InputFeiled,
  Text,
  Tital,
  LoginButton,
  ComponentContaner,
  RowObjects

 } from "./styled";

const LoginEmployee = () => {
  return (
    <ComponentContaner>
    
      <Tital>Login Eployee</Tital>
      
    
      <RowObjects>
        <Text>Your email:</Text>
        <InputFeiled/>
      </RowObjects>

      <RowObjects>
        <Text>Password:</Text>
        <InputFeiled/>
      </RowObjects>

    <LoginButton/>
    
    </ComponentContaner>
  );
};

export default LoginEmployee;
