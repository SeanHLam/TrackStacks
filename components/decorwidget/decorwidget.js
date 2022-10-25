import styled from 'styled-components/native';
import React from 'react';
import AppText from '../apptext/apptext';
import { Icon } from '@ui-kitten/components';
import { View,Text, StyleSheet, TextInput} from 'react-native';

export const Wrapper = styled.View`
width:40%;
display: flex;
flex-direction: row;
align-items: center;
justify-contenr: center;
background-color:#FEFDF4;
padding:3%;
 margin: 5%;
border:2px solid #363630;
border-radius: 5px;
box-shadow: 4px 4px #363630;
`


export default function DecWidget({
i="search",
t="Shop",
}){
    const [text, onChangeText] = React.useState('Search');
    return (
    <Wrapper>
        <Icon name={i} fill={"#363630"} style={styles.icon}/>
        <AppText text={t} align='left' style='sub'></AppText>
    </Wrapper>
    )
}

const styles = StyleSheet.create({
    icon: {

        width: 35,
        height: 35,
        marginRight: 5,
  

    },
  });
