import styled from 'styled-components/native';
import React from 'react';
import AppText from '../apptext/apptext';
import { Icon } from '@ui-kitten/components';
import { View,Text, StyleSheet, TextInput} from 'react-native';

export const Wrapper = styled.View`
width:95%;
display: flex;
flex-direction: row;
align-items: center;
justify-contenr: center;
background-color:#FEFDF4;
padding:3%;
margin: 5%;
border:2px solid #363630;
border-radius: 8px;
box-shadow: 4px 4px #363630;
`
export const StatCont = styled.View`
display: flex;

`
export const NumCont = styled.View`
display: flex;
padding:3%;
border-radius: 8px;
background-color:#7B89A3;
`



export default function Statistics({

t="Edit Profile",

}){
    return (
    <Wrapper>
        <StatCont>
            <NumCont>
                <AppText align='left' c="white" wdth='75%' text="99" style='sub'></AppText>
            </NumCont>
            
            <AppText c='blue' wdth='75%' text="Tasks Done" style='body'></AppText>
        </StatCont>
        
    
    </Wrapper>
    )
}
