import styled from 'styled-components/native';
import React from 'react';
import AppText from '../apptext/apptext';
import { Icon } from '@ui-kitten/components';
import { View,Text, StyleSheet, TextInput} from 'react-native';

export const Wrapper = styled.View`
width:85%;
display: flex;
flex-direction: row;
background-color:#FFFDF4;
padding:3%;
margin: 5% 5% 1% 5%;
border:2px solid #363630;
border-radius: 5px;
box-shadow: 4px 4px #363630;
`

const TitleCont = styled(TextInput)`
font-family: Cabin_400Regular;
color: #363630;
font-size: 20px;
width:90%
`

const TxtCont = styled.View`
width:85%;
display: flex;
flex-direction: row;
align-items: flex-end;
justify-content: flex-end;
margin-top:1%;
margin-bottom: 4%;

`


export default function TaskTitle({
t = "",
addTitle=()=>{}
}){
    //const [text, onChangeText] = React.useState('');
    // const onTest = () => {
    //     onChangeText()
    //     console.log(1)
    //   };
    
    return (
    <>
    <Wrapper>
        <TitleCont
        onChangeText={addTitle} 
        value={t}
        maxLength={30}
        defaultValue={"Title"}
        >   
        </TitleCont>
        <Icon name='edit-outline' fill={"#363630"} style={styles.icon}/>
    </Wrapper>
    <TxtCont>
        <AppText align='right'  text={`${t.length}/30`}></AppText>
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

