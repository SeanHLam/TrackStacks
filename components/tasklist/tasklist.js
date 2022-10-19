import { View,Text, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import React from 'react';
import AppText from '../apptext/apptext';
import { useFonts, Cabin_400Regular, Cabin_700Bold  } from '@expo-google-fonts/cabin';
import { Icon } from '@ui-kitten/components';

const Cont = styled.View`
width: 100%;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
`

const Checkbox = styled.View`
width:25px;
height:25px;
border:2px solid #363630;
border-radius: 5px;
box-shadow: 4px 4px #363630;
background-color:#FFFDF4;
`

const DateCont = styled.View`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin:15px;
`

const ListCont = styled.View`
display:flex;
width: 60%;
flex-direction:row;
border:2px solid #363630;
border-radius: 5px;
box-shadow: 2px 2px #363630;
background-color:#FFFDF4;
`

const TextCont = styled.View`
width:100%;
display:flex;
flex-direction: column;
justify-content:center;
text-align:center;
margin:10px;
position:relative;
`

/*const TaskText = styled.Text`
font-size:${props=>props.sz || "16px"};
color:${props=>props.subclr || "#363630"};
color:black;
margin:5px;
`*/

const CategoryTag = styled.View`
height:50px;
width: 12px;
display:flex;
border-radius: 4px 6px 6px 4px;
box-shadow: -3px 0px #363630;
position:absolute;
right: 15px;
background-color: ${({clr}) =>
                    clr === 'todo' && '#5C7457' ||
                    clr === 'longterm' && '#85C0FF' ||
                    clr === 'single' && '#89608E'
                };
`

export default function TaskList({
num="0",
date="Date",
tlt="Task Title",
sub="Task Subtext",
typ="single"
}){
    return (
        <Cont>
            <Checkbox/>
            <DateCont>
                <AppText text={num} style="date" c="black"/>
                <AppText text={date} style="body" c="black" />
            </DateCont>
            <ListCont>
                <TextCont>
                    <AppText text={tlt} style="task" c="black"/>
                    <AppText text={sub} style="tasksub" c="pink"/>
                    <CategoryTag clr={typ}/>
                </TextCont>
                     
            </ListCont>
        </Cont>
    )
}