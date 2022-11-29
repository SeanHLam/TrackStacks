import React, {useState} from 'react';
import { Pressable, StyleSheet, View, Text, LayoutAnimation } from 'react-native';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { Icon } from '@ui-kitten/components';
import { default as theme} from '../../assets/TSTheme.json';
import AppText from '../apptext/apptext';
import styled from 'styled-components/native';
import { MotiView } from 'moti';
import { Easing } from 'react-native-reanimated';

const AccordionRow = styled.Pressable`
width: 85%;
border-radius: 5px;
box-shadow: 4px 4px #363630;
border: 2px solid #363630;
display:flex;
flex-direction:row;
align-items:center;
background-color:#FFFDF4;
color: #363630;
padding:3%;
padding-left:5%;
margin:3%;
`

const AccordionColumn = styled.Pressable`
width: 85%;
border-radius: 5px;
box-shadow: 4px 4px #363630;
border: 2px solid #363630;
display:flex;
align-items:center;
background-color:#FFFDF4;
color: #363630;
padding:3%;
padding-left:5%;
margin:3%;
margin-top:0%;
`
const Wrapper = styled.View`
width:100%;
display:flex;
justify-content:center;
align-items:center;
`

export default function AccordionBar({
    qs = 'Question',
    ans = 'Answer'
}){
    const [toggle, setToggle] = useState(false);

    function toggleState(){
        if (toggle === false) {
            setToggle(value => !value);
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        }else if(toggle === true){
            setToggle(false)
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        } 
    }


    return (
        <Wrapper>
            <AccordionRow onPress={toggleState}>
                <AppText text={qs} style='task' wdth='85%'></AppText>
                {
                toggle === true &&
                <Icon name="minus-outline"
                fill={"#363630"}
                style={styles.icon}
                />
                }

                {
                toggle === false &&
                <Icon name="plus-outline"
                fill={"#363630"}
                style={styles.icon}
                />
                }          

            </AccordionRow>

                {
                toggle === true &&
                    <AccordionColumn>
                        <AppText
                        text={ans}
                        style='tasksub'
                        onPress={toggleState}
                        />
                    </AccordionColumn>
                }

            </Wrapper>
    )};

    const styles = StyleSheet.create({
        icon: {
            width: 30,
            height: 30,
        },
    });