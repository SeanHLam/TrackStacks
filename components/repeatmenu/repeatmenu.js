import React, {useState} from 'react';
import styled from 'styled-components/native';
import { Icon } from '@ui-kitten/components';
import { View,Text, StyleSheet} from 'react-native';
import AppText from '../apptext/apptext.js';
import RepeatDropDown from './repeatdropdown';
import { repeatdata } from './repeatdata.js';


const Wrapper = styled.View`
background-color:#fcf9ed;
width:90%;
border:2px solid #363630;
border-radius: 5px;
box-shadow: 4px 4px #363630;
padding:3%;
margin:5%;
`


const RepeatCont = styled.View`
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
`

export default function RepeatMenu({
tlt="Repeat",
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
    <Wrapper>
            <RepeatCont onPress={toggleState}>
                <AppText wdth="90%" text={tlt} style="body"/>
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
            </RepeatCont>

            
            {toggle === true &&
            <DropDownWrapper>
                    <RepeatDropDown txt={repeatdata[0].cycle}/>
                    <RepeatDropDown txt={repeatdata[1].cycle}/>
                    <RepeatDropDown txt={repeatdata[2].cycle}/>
                    <RepeatDropDown txt={repeatdata[3].cycle}/>
                    <RepeatDropDown txt={repeatdata[4].cycle}/>
                    <RepeatDropDown txt={repeatdata[5].cycle}/>
                    <RepeatDropDown txt={repeatdata[6].cycle}/>
                    <RepeatDropDown txt={repeatdata[7].cycle}/>
            </DropDownWrapper>
            }
        </Wrapper>
    )
}

const styles = StyleSheet.create({
    icon: {

        width: 35,
        height: 35,
        marginTop:-3
    },

        container: {
            width:"90%",
        },
      
  });

  