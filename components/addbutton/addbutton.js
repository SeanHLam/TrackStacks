import styled from 'styled-components/native';
import React from 'react';
import AppText from '../apptext/apptext';
import { Icon } from '@ui-kitten/components';
import { View,Text, StyleSheet, TextInput, TouchableOpacity, Pressable} from 'react-native';

const Wrapper = styled.Pressable`
display: flex;
flex-direction: row;
padding:3%;
`

const IconCont = styled.View`
display: flex;
flex-direction: row;
background-color:#EAAA99;
border:2px solid #363630;
border-radius: 5px;
`

export default function AddBttn({
 onAdd=()=>{},
}){

      const bttPress = (pressType) => {
    console.log(pressType);
    };
    return (
    <Wrapper
    onPress={()=>onAdd()}
    onPressIn={() => bttPress("onPressIn")}
      onPressOut={() => bttPress("onPressOut")}
      onLongPress={() => bttPress("onLongPress")}
      style={({ pressed }) => [
        {
        shadowOpacity: pressed
        ? 0
        : 1,
        shadowRadius: pressed
        ? 0
        : 0.1,
        shadowOffset: pressed
        ? {width:0, height:0}
        : {width:4, height:4},
        shadowColor: '#363630'
        }
      ]
    }>
        <IconCont >
         <Icon name='plus' fill={"#FEFDF4"} style={styles.icon}/>
        </IconCont>
    </Wrapper>
    )
}

const styles = StyleSheet.create({
    icon: {
        width: 35,
        height: 35,
    },
  });
