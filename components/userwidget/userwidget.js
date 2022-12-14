import styled from 'styled-components/native';
import React from 'react';
import AppText from '../apptext/apptext';
import { Icon } from '@ui-kitten/components';
import { View,Text, StyleSheet, TextInput, Image} from 'react-native';
import AppBttn from '../button/appbutton';

export const Wrapper = styled.View`
display: flex;
padding: 2%;
`

export const PfpCont = styled.View`
display: flex;
align-items:center;
justify-content:center;
width:100%;
border-radius: 10px;
box-shadow: 5px 5px #363630;
border: 4px solid #363630;
background-color:#7B89A3;
`

export default function UserWidget({
name="",
email="",
}){
    return (
    <Wrapper>
        <PfpCont>
            <Icon name={"person"} fill={"#363630"} style={styles.icon}></Icon>
        </PfpCont>
    </Wrapper>
    )
}


const styles = StyleSheet.create({
    icon: {
        width: 100,
        height: 100,
    },
  });

