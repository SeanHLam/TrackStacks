import styled from 'styled-components/native';
import React from 'react';
import AppText from '../apptext/apptext';
import { Icon } from '@ui-kitten/components';
import { View,Text, StyleSheet, TextInput} from 'react-native';

export const Wrapper = styled.View`

`


export default function IconBttn({
i="search",
width='55',
height='55',
padding='0%',
onIcon=()=>{},
}){
    const [text, onChangeText] = React.useState('Search');
    return (
        <Icon name={i} fill={"#363630"} style={styles.icon} width={width} height={height} onPress={onIcon}/>
    )
}

const styles = StyleSheet.create({
    icon: {

        width: 55,
        height: 55,
        marginRight: 5,
  

    },
  });
