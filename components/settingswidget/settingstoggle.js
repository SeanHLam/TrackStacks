import styled from 'styled-components/native';
import React from 'react';
import AppText from '../apptext/apptext';
import { Icon } from '@ui-kitten/components';
import { View,Text, StyleSheet, TextInput} from 'react-native';
import { Toggle } from '@ui-kitten/components';

export const Wrapper = styled.View`
width:90%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
background-color:#FEFDF4;
padding:3%;
margin: 5%;
border:2px solid #363630;
border-radius: 8px;
box-shadow: 4px 4px #363630;
`
export const ICont = styled.View`
background-color:#EAAA99;
border-radius: 100%;
display:flex;
justify-content:center;
align-items:flex-start;
padding:1%;
margin-right:2%;
width:10%;
`



export default function SetToggle({
i="bell-outline",
t="Notifications",
onToggle=()=>{}
}){
    const [checked, setChecked] = React.useState(true);
    const onCheckedChange = (isChecked) => {
        setChecked(isChecked);
        onToggle()
      };
    return (
    <Wrapper>
        <ICont>
            <Icon  name={i} fill={"#FEFDF4"} style={styles.icon}/>
        </ICont>
        <AppText wdth='65%' paddingleft='2%' text={t} style='sub'></AppText>
        <Toggle checked={checked} onChange={onCheckedChange}>
    
    </Toggle>
    </Wrapper>
    )
}

const styles = StyleSheet.create({
    icon: {
        width: 25,
        height: 25,
    },
  });
