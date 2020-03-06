import styled from "styled-components";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const SubBoxes = styled.div`
display: flex;
justify-content: space-evenly;
margin: 0% 30%;
padding: 5%;

`;

export const SubBox = styled(Col)`

background: #bfb1c4;
width: 20%;
height: 20%;
border: 2px solid black;
border-radius: 25px;
justify-content: space-evenly;
margin: 5%;
`;

export const SubRows = styled(Row)`
border: 5px solid gray;
`;

export const SubTitel = styled.h2`
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
`;