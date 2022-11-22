import React, {useState} from 'react';
import styled from 'styled-components/native';
import {View,Text} from 'react-native';
import { Icon } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import AppText from '../apptext/apptext';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { default as theme} from '../../assets/TSTheme.json';
import { Pressable, StyleSheet } from 'react-native';
import { accordionData } from './accordiondata';
import AccordionBar from './accordionbar';

const AccordionContainer = styled.View`
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
width:100%;
`

export default function Accordion() {
    
    
    return(
        <ApplicationProvider 
        style={{display: "flex", 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        }} 
        {...eva} 
        theme={
            { 
            ...eva.light,
            ...theme
        }
        }>
        <IconRegistry 
        icons={EvaIconsPack} 
        />
        <AccordionContainer>
            <AccordionBar></AccordionBar>
            <AccordionBar></AccordionBar>
            <AccordionBar></AccordionBar>
            <AccordionBar></AccordionBar>
        </AccordionContainer>
            
    </ApplicationProvider>
    )
}

