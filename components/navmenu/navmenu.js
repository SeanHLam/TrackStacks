import {StyleSheet} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import { Icon } from '@ui-kitten/components';
import { colour } from './navdata';

const Cont = styled.View`
background-color: #363630;
width: 100%;
height:100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
`;

const Divider = styled.Text`
color: #FEFDF4;
font-size: 20px;

`

export default function NavMenu({
 activemenu = "Home",
 onHome =()=>{},
 onTask =()=>{},
 onDecor =()=>{},
 onUser =()=>{},
}){
    
    return(
        <Cont>
            <Icon name='home' fill={colour[activemenu].home || "#FEFDF4"} style={styles.icon} onPress={onHome}/>
            <Divider>|</Divider>
            <Icon name='clipboard' fill={colour[activemenu].board || "#FEFDF4"} style={styles.icon} onPress={onTask}/>
            <Divider>|</Divider>
            <Icon name='brush' fill={colour[activemenu].brush || "#FEFDF4"} style={styles.icon} onPress={onDecor}/>
            <Divider>|</Divider>
            <Icon name='person' fill={colour[activemenu].user || "#FEFDF4"} style={styles.icon} onPress={onUser}/>
        </Cont>
    )
}

const styles = StyleSheet.create({
    icon: {
      width: 40,
      height: 40,
      marginRight: 25,
      marginLeft: 25,
    },
  });
