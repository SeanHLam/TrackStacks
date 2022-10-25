import styled from 'styled-components/native';
import React from 'react';
import AppText from '../apptext/apptext';
import { Icon } from '@ui-kitten/components';
import { View,Text, StyleSheet, TextInput} from 'react-native';

export const Wrapper = styled.View`
width:90%;
display: flex;
flex-direction: row;
background-color:#FEFDF4;
padding:3%;
margin: 5% 5% 1% 5%;
border:2px solid #363630;
border-radius: 5px;
box-shadow: 4px 4px #363630;
`

const TitleCont = styled(TextInput)`

`



export default function TaskDate({
    
}){
    
    return (
    <>
    <Wrapper>
        <AppText></AppText>
        <Icon name='edit-outline' fill={"#363630"} style={styles.icon}/>
    </Wrapper>

   
    </>
    )
}



const styles = StyleSheet.create({
    icon: {
        width: 35,
        height: 35,
    },
  });

