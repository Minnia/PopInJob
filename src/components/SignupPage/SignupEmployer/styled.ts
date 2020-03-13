import styled from "styled-components";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from "react-bootstrap";

export const Logindiv = styled.div`

background: #bfb1c4;

justify-content: space-evenly;
margin: 5% 20% 5% 20%;
padding: 10% 10% 10% 10%;

`;
export const ComponentContaner = styled(Col)`

margin: 0% 20% 0% 20%;

justify-content: space-evenly;
`;


export const InputFeiled = styled.input`

margin: 0% 0% 0% 30%;

`;

export const Text = styled.text`

margin: 0% 0% 0% 30%;

`;

export const Tital = styled.h2`
background: #65c0ba;
border-radius: 10px;
display: flex;

margin 5% 35%;
justify-content: space-evenly;

`;

export const SignupButton = styled(Button)`
margin: 5% 0% 5% 40%;

`;

export const RowObjects = styled(Row)`
border: 5px solid gray;
`;
