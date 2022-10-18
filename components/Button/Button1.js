import React from 'react';
import { ButtonCont  } from '../../styles/global';
import { Button, Layout } from '@ui-kitten/components';
import styled from 'styled-components';



export const Button1 = ({
  width="30%",
  text ="Sign Up",
  height = "10%",
}) => (
 <ButtonCont wth= {width} hght= {height} >
  <Button style={{backgroundColor:"#EAAA99", color:"#363630",borderColor:"#363630",borderWidth:2}}>
     Sign Up
    </Button>
 </ButtonCont>
 
);

export const Buttonst = styled(Button)`
background-color:#EAAA99;
`







