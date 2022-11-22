import React, {useState} from 'react';
import { Pressable, StyleSheet, View,Text } from 'react-native';
import {accordiondata}  from './accordiondata.js';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { Icon } from '@ui-kitten/components';
import { default as theme} from '../../assets/TSTheme.json';
import AppText from '../apptext/apptext';
import styled from 'styled-components/native';

const AccordionRow = styled.Pressable`
width: 85%;
border-radius: 5px;
box-shadow: 4px 4px #363630;
border: 2px solid #363630;
display:flex;
flex-direction:row;
align-items:center;
background-color:#FFFDF4;
color: #363630;
padding:3%;
padding-left:5%;
margin:3%;
`

const AccordionColumn = styled.Pressable`
width: 85%;
border-radius: 5px;
box-shadow: 4px 4px #363630;
border: 2px solid #363630;
display:flex;
flex-direction:column;
align-items:center;
background-color:#FFFDF4;
color: #363630;
padding:3%;
padding-left:5%;
margin:3%;
margin-top:-1%;
`
const Wrapper = styled.View`
width:100%;
display:flex;
justify-content:center;
align-items:center;
`

export default function AccordionBar(){
    const [toggle, setToggle] = useState(true);

    function toggleState(){
        if (toggle === false) {
            setToggle(true)
        }else if(toggle === true){
            setToggle(false)
        } 
    }

    const { question, answer } = accordiondata;

    return (
        <Wrapper>
            <AccordionRow onPress={toggleState}>
                <AppText text='Question' style='sub' wdth='85%'></AppText>
                {
                toggle === true &&
                <Icon name="minus-outline"
                fill={"#363630"}
                style={styles.icon}
                />
                }

                {
                toggle === false &&
                <Icon name="plus-outline"
                fill={"#363630"}
                style={styles.icon}
                />
                }          

            </AccordionRow>
                {
                toggle === true &&
                <AccordionColumn>
                <AppText
                text='Answer'
                style='sub'
                onPress={toggleState}
                />
                </AccordionColumn>
                }

            </Wrapper>
    )};

    const styles = StyleSheet.create({
        icon: {
            width: 30,
            height: 30,
        },
    });