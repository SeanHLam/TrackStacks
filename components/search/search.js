import styled from 'styled-components/native';
import React from 'react';
import AppText from '../apptext/apptext';
import { Icon } from '@ui-kitten/components';
import { View,Text, StyleSheet, TextInput} from 'react-native';

const Wrapper = styled.View`
width:90%;
display: flex;
flex-direction: row;
background-color:#7B89A3;
padding:3%;
margin: 5%;
border:2px solid #363630;
border-radius: 5px;
box-shadow: 4px 4px #363630;
`

const SearchCont = styled(TextInput)`
font-family: Cabin_400Regular;
color: #FEFDF4;
font-size: 20px;
width:45%
`

const CatCont = styled.View`
display: flex;
flex-direction: row;
align-items: center;
`


export default function TaskSearch({
    
}){
    const [text, onChangeText] = React.useState('Search');
    return (
    <Wrapper>
        <Icon name='search' fill={"#FEFDF4"} style={styles.icon}/>
        <SearchCont
        onChangeText={onChangeText} 
        value={text}
        >   
        </SearchCont>
        <CatCont>
            <Icon name='chevron-down' fill={"#FEFDF4"} style={styles.icon}/>
            <AppText text="Category" style='body' c="white"></AppText>
        </CatCont>
    </Wrapper>
    )
}

const styles = StyleSheet.create({
    icon: {

        width: 35,
        height: 35,
  

    },
  });
