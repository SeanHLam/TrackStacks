import styled from 'styled-components/native';
import React from 'react';
import AppText from '../apptext/apptext';
import { Icon } from '@ui-kitten/components';
import { View,Text, StyleSheet, TextInput} from 'react-native';

export const Wrapper = styled.View`
width:90%;
display: flex;
flex-direction: row;
background-color:#FEFDF4;
padding:3%;
margin: 5% 5% 1% 5%;
border:2px solid #363630;
border-radius: 5px;
box-shadow: 4px 4px #363630;
`

const SearchCont = styled(TextInput)`
font-family: Cabin_400Regular;
color: #363630;
font-size: 20px;
width:90%
`

const TxtCont = styled.View`
width:100%;
display: flex;
flex-direction: row;
align-items: flex-end;
justify-content: flex-end;
margin-right: 10%;

`


export default function TaskTitle({
    
}){
    const [text, onChangeText] = React.useState('');
    return (
    <>
    <Wrapper>
        <SearchCont
        onChangeText={onChangeText} 
        value={text}
        maxLength={30}
        defaultValue={"Title"}
        >   
        </SearchCont>
        <Icon name='edit-outline' fill={"#363630"} style={styles.icon}/>
    </Wrapper>
    <TxtCont>
        <AppText text={`${text.length}/30`}></AppText>
    </TxtCont>
   
    </>
    )
}



const styles = StyleSheet.create({
    icon: {
        width: 35,
        height: 35,
    },
  });

