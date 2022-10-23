import styled from 'styled-components/native';
import React from 'react';
import AppText from '../apptext/apptext';
import { Icon } from '@ui-kitten/components';
import { View,Text, StyleSheet, TextInput, TouchableOpacity, Pressable} from 'react-native';

const Wrapper = styled.Pressable`
width:90%;
display: flex;
justify-content: flex-end;
flex-direction: row;
padding:3%;
`

const IconCont = styled.View`
display: flex;
flex-direction: row;
background-color:#EAAA99;
border:2px solid #363630;
border-radius: 5px;
box-shadow: 4px 4px #363630;
`

export default function AddBttn({
 onAdd=()=>{},
}){
    return (
    <Wrapper onPress={onAdd()}>
        <IconCont >
         <Icon name='plus' fill={"#FEFDF4"} style={styles.icon}/>
        </IconCont>
    </Wrapper>
    )
}

const styles = StyleSheet.create({
    icon: {
        width: 35,
        height: 35,
    },
  });
