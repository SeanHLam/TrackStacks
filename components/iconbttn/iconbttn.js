import styled from 'styled-components/native';
import React from 'react';
import AppText from '../apptext/apptext';
import { Icon } from '@ui-kitten/components';
import { View,Text, StyleSheet, TextInput} from 'react-native';

export const Wrapper = styled.View`

`


export default function IconBttn({
i="search",
}){
    const [text, onChangeText] = React.useState('Search');
    return (
        <Icon name={i} fill={"#363630"} style={styles.icon}/>
    )
}

const styles = StyleSheet.create({
    icon: {

        width: 45,
        height: 40,
        marginRight: 5,
  

    },
  });
