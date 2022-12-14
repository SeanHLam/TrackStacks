import styled from 'styled-components/native';
import React from 'react';
import AppText from '../apptext/apptext';
import { Icon } from '@ui-kitten/components';
import { View,Text, StyleSheet, TextInput, Modal, Pressable} from 'react-native';
import { useState } from 'react';
import Add from '../addbutton/addbutton';
import Widget from '../widgets/widget';
import AppBttn from '../button/appbutton';
import { MotiView, MotiText } from 'moti'
import { Easing } from 'react-native-reanimated';

const Wrapper = styled.Pressable`
display: flex;
flex-direction: row;
justify-content: center;
align-items:center;
flex: 1;
width:100%;
height: 100%;
background-color:rgba(0, 0, 0, 0.5);
position: absolute;
z-index: 30;
`
const Mdl = styled.Modal`
display: flex;
flex: 1;
flex-direction: row;
justify-content:center;
align-items:center;
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
margin-top:80%;
`
const BttnCont = styled.View`
display: flex;
flex-direction: row;
justify-content: center;
align-items:center;
padding:5%;
`

const HeaderCont = styled.View`
margin-top:4%;
width:90%;
display:flex;
align-items:center;
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
                <MotiView
                from={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    type:'timing',
                    duration:800,
                    easing:Easing.in(Easing.bounce)
                }}
                >
                <Popup>
                <HeaderCont>
                <AppText style='sub' align='center' text={mdltext}></AppText>
                </HeaderCont>
                <BttnCont>
                    <AppText align='center' wdth='60%' style='sub' text={"You will receive:"}></AppText>
                    <Icon  name='star' fill={"#EAAA99"} style={styles.icon}/>
                    <AppText align='left' style='sub' wdth='20%' text={"50"}></AppText>
                </BttnCont>
                <BttnCont style={{width:'100%', display:'flex', justifyContent:'space-evenly'}}>
                    <AppBttn onBttn={onYes} bttntext='Yes'></AppBttn>
                    <AppBttn onBttn={onNo} bttntext='No'></AppBttn>
                </BttnCont>
                </Popup>
                </MotiView>
            </Mdl> 
        </Wrapper>}
        </>
    )
}

const styles = StyleSheet.create({
    icon: {
        width: 35,
        height: 35,
    },
  });
