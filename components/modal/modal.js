import styled from 'styled-components/native';
import React from 'react';
import AppText from '../apptext/apptext';
import { Icon } from '@ui-kitten/components';
import { View,Text, StyleSheet, TextInput, Modal} from 'react-native';
import { useState } from 'react';
import Add from '../addbutton/addbutton';
const Wrapper = styled.View`
display: flex;
flex-direction: row;
padding:3%;

`
const Mdl = styled(Modal)`
width:100%;
height: 100%;
background-color: black;
opacity: 0.5;
`

export default function ModalPop({
}){
    const [modalVisible, setModalVisible] = useState(false);
    return (
    <Wrapper>
        <Mdl
        visible={modalVisible}
        ></Mdl>
     
    </Wrapper>
   
    )
}

const styles = StyleSheet.create({
    icon: {
        width: 35,
        height: 35,
    },
  });
