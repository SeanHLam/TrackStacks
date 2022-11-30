import styled from 'styled-components/native';
import React from 'react';
import AppText from '../apptext/apptext';
import { Icon } from '@ui-kitten/components';
import { View,Text, StyleSheet, TextInput} from 'react-native';

export const Wrapper = styled.View`
width:90%;
display: flex;
flex-direction: row;
justify-content: center;
background-color:#FEFDF4;
margin:2%;
margin-bottom:5%;
border:2px solid #363630;
border-radius: 8px;
box-shadow: 4px 4px #363630;
`

export const ColWrapper = styled.View`
display: flex;
align-items:center;
padding:5%;
`

export const StatCont = styled.View`
display: flex;
margin:3%;

`
export const NumCont = styled.View`
display: flex;
justify-content: center;
align-items:flex-start;

`

export const NumBg = styled.View`
padding:8%;
border-radius: 8px;
border-radius: 8px;
background-color:#7B89A3;
`





export default function Statistics({

done=0,
earned=0,
spent=0,
doing=0


}){
    return (
    <Wrapper>
        <ColWrapper>
        <StatCont>
            <NumCont>
                <NumBg>
                    <AppText text={done} align='left' c="white" wdth='100%'  style='sub'></AppText>
                </NumBg>
                
            </NumCont>
            <AppText c='blue' wdth='100%' text="Tasks done" style='body'></AppText>
        </StatCont>

        <StatCont>
            <NumCont>
            <NumBg>
                 <AppText align='left' c="white" wdth='100%' text={spent} style='sub'></AppText>
            </NumBg>
            </NumCont>
            <AppText c='blue' wdth='100%' text="Stars Spent" style='body'></AppText>
        </StatCont>
        </ColWrapper>

        <ColWrapper>
        <StatCont>
            <NumCont>
                <NumBg>
                    <AppText align='left' c="white" wdth='100%' text={doing} style='sub'></AppText>
                </NumBg>
                
            </NumCont>
            <AppText c='blue' wdth='100%' text="Tasks doing" style='body'></AppText>
        </StatCont>

        <StatCont>
            <NumCont>
            <NumBg>
                 <AppText text={earned} align='left' c="white" wdth='100%' style='sub'></AppText>
            </NumBg>
            </NumCont>
            <AppText c='blue' wdth='100%' text="Stars earned" style='body'></AppText>
        </StatCont>
        </ColWrapper>
        

        
        
    
    </Wrapper>
    )
}
