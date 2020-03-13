import styled from "styled-components";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const SubBoxes = styled.div`
display: flex;
justify-content: space-evenly;
margin: 10% 10%;
padding: 10%;

`;

export const SubBox = styled(Col)`

background: #bfb1c4;
width: 40%;
height: 60%;
border: 2px solid black;

justify-content: space-evenly;
margin: 5%;
`;

export const SubRows = styled(Row)`
border: 5px solid gray;
`;

export const SubTitle = styled.h2`
background: #65c0ba;
border-radius: 10px;
display: flex;
justify-content: space-evenly;
`;

export const SubText = styled.text`
display: flex;
justify-content: space-evenly;
`;

export const SubButton = styled.button`
display: flex;
justify-content: space-evenly;
border-radius: 20px;
`;