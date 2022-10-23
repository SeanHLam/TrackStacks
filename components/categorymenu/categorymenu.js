import React, {useState} from 'react';
import styled from 'styled-components/native';
import { Icon } from '@ui-kitten/components';
import { View,Text, StyleSheet} from 'react-native';
import AppText from '../apptext/apptext.js';
import {Wrapper} from '../search/search';
import DropDown from './categorydropdown.js';
import { Colours } from './categorydata.js';

const Wrapper1 = styled.View`
background-color:#fcf9ed;
width:90%;
border:2px solid #363630;
border-radius: 5px;
box-shadow: 4px 4px #363630;
padding:3%;
margin:5%;
`


const SearchCont = styled.View`
color: #363630;
display:flex;
flex-direction:row;
align-items:flex-start;
font-family: Cabin_400Regular;
width:100%;
margin-top:1%;
padding-left:3%;
padding-right:3%;
`

const DropDownWrapper = styled.View`
height:25%
`


export default function Category({
tlt="Pick a Category",
}){
    const [toggle, setToggle] = React.useState(false);
    function toggleState(){
        if (toggle === false) {
            setToggle(true)
        }else if(toggle === true){
            setToggle(false)
        } 
    }

    return (
        <Wrapper1>
            <SearchCont onPress={toggleState}>
                <AppText text={tlt} style="body"/>
                {
                toggle === false &&
                <Icon name="chevron-down"
                fill={"#363630"}
                style={styles.icon}
                onPress={toggleState}
                />
                }

                {
                toggle === true &&
                <Icon name="chevron-up"
                fill={"#363630"}
                style={styles.icon}
                onPress={toggleState}
                />
                }
            </SearchCont>

            
            {toggle === true &&
            <DropDownWrapper>
                <DropDown typ="Long-Term" txt="Long-Term" eventKey="Long-Term"/>
                <DropDown typ="Single" txt="Single" eventKey="Single"/>
                <DropDown typ="To-Do" txt="To-Do" eventKey="To-Do"/>
            </DropDownWrapper>
            }

        </Wrapper1>
    )
}

const styles = StyleSheet.create({
    icon: {

        width: 35,
        height: 35,
        marginLeft: 130,
        marginTop:-3
    },
  });