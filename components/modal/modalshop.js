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
import Item from '../assetslider/item';

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
padding: 3%;
margin-top:80%;
`
const BttnCont = styled.View`
display: flex;
flex-direction: row;
justify-content: center;
align-items:center;
padding:5% 5% 4% 5%;
`

const TextCont = styled.View`
display: flex;
justify-content: center;
align-items:center;
padding:5% 5% 4% 5%;
`

export default function ModalShop({
    mdltext="Purchase This Item?",
    onClose=()=>{},
    onYes=()=>{},
    onNo=()=>{},
    mdlvis=false,
    img="Cactus",
    page=1
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
                {page === 1 &&
                    <Popup>
                    <AppText style='sub' align='center' text={mdltext}></AppText>
                    <BttnCont>
                        <Item size='100' image={img}></Item>
                    </BttnCont>
                    <BttnCont>
                        <AppBttn onBttn={onYes} bttntext='Yes'></AppBttn>
                        <AppBttn onBttn={onNo} bttntext='No'></AppBttn>
                    </BttnCont>
                    </Popup>
                }

                {page === 2 &&
                    <Popup>
                   <Icon  name='checkmark-circle-2' fill={"#EAAA99"} style={styles.icon} ></Icon>
                    <TextCont>
                        <AppText style='sub' align='center' text={"Purchase Successful!"}></AppText>
                        <AppText c='grey' style='tasksub' align='center' text={"Use it to personalize your room!"}></AppText>
                    </TextCont>
                    <BttnCont>
                        <AppBttn style='huge' onBttn={onNo} bttntext='Back'></AppBttn>
                        
                    </BttnCont>
                    </Popup>
                }
                
                {page === 3 &&
                    <Popup>
                   <Icon  name='alert-circle' fill={"#EAAA99"} style={styles.icon} ></Icon>
               
                       
                        <AppText style='sub' align='center' text={"You don't have enough stars."}></AppText>
                       

                    <BttnCont>
                        <AppBttn style='huge' onBttn={onNo} bttntext='Back'></AppBttn>
                        
                    </BttnCont>
                    </Popup>
                }

                </MotiView>
            </Mdl> 
        </Wrapper>}
        </>
    )           
}

const styles = StyleSheet.create({
    icon: {
        width: 50,
        height: 50,
       
    },
  });
