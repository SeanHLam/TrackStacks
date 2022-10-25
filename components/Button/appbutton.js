import React from 'react';
import { ButtonCont  } from '../../styles/global';
import { Layout, Text } from '@ui-kitten/components';
import styled from 'styled-components';
import { Button, TouchableOpacity, Pressable  } from 'react-native';
import AppText from '../apptext/apptext';


export const Buttonst = styled.Pressable`
display:flex;
background-color:#EAAA99;
border:2px solid #363630;
box-shadow: 2px 2px #363630;
width: ${({size}) => 
size === 'small' && '30%' ||
size === 'large' && '40%' || 
size === 'huge' && '60%' || 
'40%'
};

justify-content:center;
align-items:center;
align-content:center;
text-align:center;
border-radius: 10px;
padding:3%;
margin:3%;

`

export default function AppBttn({
  bttntext ="Sign Up",
  style = "large",
  alignItems="center",
  onBttn=()=>{},
}){
    return(
     
      <Buttonst size={style} onPress={onBttn}>
         <AppText align='center' c="black" style='sub' text={bttntext}/>
      </Buttonst>

    )
}





