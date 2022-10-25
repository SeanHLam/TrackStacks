import styled from 'styled-components/native';
import React from 'react';
import AppText from '../apptext/apptext';
import { Icon } from '@ui-kitten/components';
import { View,Text, StyleSheet, TextInput, Modal, Pressable} from 'react-native';
import { useState } from 'react';
import Add from '../addbutton/addbutton';
import Widget from '../widgets/widget';
import AppBttn from '../Button/appbutton';

const Wrapper = styled.Pressable`
display: flex;
flex-direction: row;
justify-content: 'center';
align-items:"center";
flex: 1;
width:100%;
height: 100%;
backgroundColor: 'rgba(0, 0, 0, 0.5)'
position: absolute;
z-index: 30;
`
const Mdl = styled.Modal`
display: flex;
flex: 1;
flex-direction: row;
justify-content: 'center';
align-items:"center";
backgroundColor: red;
align-self: center;
`

const Popup = styled.View`
align-self: center;
display:flex;
justify-content: center;
align-items:center;
width: 75%;
background-color: #FEFDF4;
border-radius: 10px;
box-shadow: 5px 5px #363630;
border: 4px solid #363630;
padding: 3%;
margin-top:50%;
`
const BttnCont = styled.View`
display: flex;
flex-direction: row;
justify-content: center;
align-items:center;
padding:5%;
`

export default function ModalPop({
    mdltext="Mark this task as complete?",
    onClose=()=>{},
    onYes=()=>{},
    onNo=()=>{},
    mdlvis=false
}){
    
    return (
    <>
    {mdlvis === true &&
        <Wrapper onPress={onClose}>
            <Mdl
            transparent={true}
            visible={mdlvis}
            >
                <Popup>
                <AppText style='sub' align='center' text={mdltext}></AppText>
                <BttnCont>
                    <AppText align='center' wdth='50%' style='sub' text={"You will get:"}></AppText>
                    <Icon  name='star' fill={"#EAAA99"} style={styles.icon}/>
                    <AppText align='left' style='sub' wdth='20%' text={"30"}></AppText>
                </BttnCont>
                <BttnCont>
                    <AppBttn onBttn={onYes} bttntext='Yes'></AppBttn>
                    <AppBttn onBttn={onNo} bttntext='No'></AppBttn>
                </BttnCont>
                </Popup>
            </Mdl>  
        </Wrapper>}
        </>
    )
}

const styles = StyleSheet.create({
    icon: {
        width: 35,
        height: 35,
        marginLeft: 5,
    },
  });
