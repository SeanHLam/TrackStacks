import styled from 'styled-components/native';
import React from 'react';
import AppText from '../apptext/apptext';
import { Icon } from '@ui-kitten/components';
import { View,Text, StyleSheet, TextInput} from 'react-native';

export const Wrapper = styled.View`
width:100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
background-color:#FEFDF4;
padding:3%;
margin: 5%;
margin-bottom:4%;
border:2px solid #363630;
border-radius: 8px;
box-shadow: 4px 4px #363630;
`
export const ICont = styled.View`
background-color:#EAAA99;
border-radius: 100%;
display:flex;
justify-content:center;
align-items:flex-start;
padding:1%;
margin-right:2%;
width:10%;
`



export default function SetWidget({
i="edit-outline",
t="Edit Profile",
onSet =()=>{}
}){
    return (
    <Wrapper>
        <ICont>
            <Icon name={i} fill={"#FEFDF4"} style={styles.icon}/>
        </ICont>
        <AppText wdth='75%' paddingleft='2%' text={t} style='sub'></AppText>
        
        <Icon  name="chevron-right" fill={"#363630"} style={styles.icon} onPress={onSet}/>
    </Wrapper>
    )
}

const styles = StyleSheet.create({
    icon: {
        width: 25,
        height: 25,
    },
  });
