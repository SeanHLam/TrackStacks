import React from 'react';
import { ButtonCont  } from '../../styles/global';
import { Button, Layout, Text } from '@ui-kitten/components';
import styled from 'styled-components';



export const Button1 = ({
  width="170px",
  text ="Sign Up",
  height="45px"
}) => (
 <ButtonCont >
  <Buttonst wth= {width} hght= {height}>
     <Text style={{color:"#FFDDAA"}}>{text}</Text>
    </Buttonst>
 </ButtonCont>
 
);

export const Buttonst = styled(Button)`
display:flex;
background-color:#EAAA99;
border-color:"#363630";
border:2px solid;
width:${props=>props.wth};
height:${props=>props.hght};
justify-content:center;
align-items:center;
align-content:center;
text-align:center;
margin:10px;
`







