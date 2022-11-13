import styled from 'styled-components/native';
import React from 'react';
import AppText from '../apptext/apptext';
import { Icon } from '@ui-kitten/components';
import { View,Text, StyleSheet, TextInput, Image} from 'react-native';
import AppBttn from '../Button/appbutton';

export const Wrapper = styled.View`
display: flex;
padding: 2%;
flex-direction:row;
align-items:center;
justify-content:center;

`

export const PfpCont = styled.View`
display: flex;
align-items:center;
justify-content:center;
padding: 5%;
margin:5%;
border-radius: 10px;
box-shadow: 5px 5px #363630;
border: 4px solid #363630;
background-color:#7B89A3;

`

export const UserCont = styled.View`
display: flex;

`





export default function UserWidget({
name="Sean Lam",
email="slam152@gmail.com",
}){
    return (
    <Wrapper>
        <PfpCont>
            <Icon name={"person"} fill={"#363630"} style={styles.icon}></Icon>
        </PfpCont>
        <UserCont>
            <AppText style="sub"  text={name}></AppText>
            <AppText wdth='100%' text={email}></AppText>
            <AppBttn style='huge' bttntext="logout"></AppBttn>
        </UserCont>
       

    </Wrapper>
    )
}


const styles = StyleSheet.create({
    icon: {
        width: 80,
        height: 80,
    },
  });

