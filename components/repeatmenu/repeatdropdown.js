import React, {useState} from 'react';
import styled from 'styled-components/native';
import { Icon } from '@ui-kitten/components';
import { View,Text, StyleSheet} from 'react-native';
import AppText from '../apptext/apptext.js';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const DropDownCont = styled.View`
width:90%;
`

const Repeat = styled.View`
display:flex;
flex-direction:row;
justify-content:flex-start;
align-items:center;
width:100%;
padding-left:10%;
padding-top:8%;
padding-bottom:3%;
`

export default function RepeatDropDown({
    txt="Repeat",
    onSelect=()=>{},
}){

    return (
        <DropDownCont>
                <Pressable onPress={onSelect}>
                    <Repeat>
                        <AppText wdth="100%" text={txt} style="body"/>
                    </Repeat>
                </Pressable>
        </DropDownCont>
    )
}
