import { View,Text, StyleSheet, Pressable} from 'react-native';
import styled from 'styled-components/native';
import React, {useState} from 'react';
import AppText from '../apptext/apptext';
import { useFonts, Cabin_400Regular, Cabin_700Bold  } from '@expo-google-fonts/cabin';
import { Icon } from '@ui-kitten/components';
import Checkbox from 'expo-checkbox';

const Cont = styled.View`
width: 100%;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
`

/*const Checkbox = styled.View`
width:20px;
height:20px;
border:2px solid #363630;
border-radius: 5px;
box-shadow: 4px 4px #363630;
background-color:#FFFDF4;
`
*/

const DateCont = styled.View`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin:4% 4% 4% 0;
width:11%;
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
width: 70%;
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

export const CategoryTag = styled.View`
width: 20%;
display:flex;
border-radius: 4px 6px 6px 4px;
box-shadow: -3px 0px #363630;
background-color: ${({clr}) =>
                    clr === 'To Do' && '#5C7457' ||
                    clr === 'Long Term' && '#85C0FF' ||
                    clr === 'Single' && '#89608E'
                };
`

const ColTag = styled.View`
width: 7%;
display:flex;
border-radius: 4px 6px 6px 4px;
box-shadow: -3px 0px #363630;
background-color: ${({clr}) =>
                    clr === 'To Do' && '#5C7457' ||
                    clr === 'Long Term' && '#85C0FF' ||
                    clr === 'Single' && '#89608E'
                };
margin-left: 5.7%;
`

const ICont = styled.View`
display:flex;
align-items: start;
justify-content: flex-end;
margin-bottom:2%
`



export default function ArchiveList({
onDone=()=>{},
onEdit=()=>{},
num="0",
date="Date",
tlt="Task Title",
month="JAN",
sub="CATEGORY",
typ="single",
sz="100%",
checked=false

})
{ 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
    return (
        <Cont>
          
                <AppText wdth='15%' align='center' text={month} style="date" c="black"/>
           

           <DateCont>
                <AppText align='center' text={num} style="date" c="black"/>
                <AppText align='center' wdth='100%' text={date} style="body" c="black" />
            </DateCont>
            <ListCont>
                <TextCont>
                    <AppText wdth='100%' text={tlt}  style="task" c="black"/>
                    <AppText text={sub} style="tasksub" c="pink"/>

                    
                </TextCont>
                <ICont>
                    <Icon  name='edit-outline' fill={"#363630"} style={styles.icon}/>
                </ICont>
                
                <ColTag clr={typ}></ColTag>
            </ListCont>
            
        </Cont>
    )
}

const styles = StyleSheet.create({
    checkbox: {
        shadowOpacity:1,
        shadowColor: '#363630',
        shadowRadius: 0.1,
        shadowOffset: { width:2, height:2 },
        width: 25,
        height:25,
        borderWidth:2,
        borderRadius:5,
        borderColor:'#FFFDF4',
    },
    icon: {
        width: 25,
        height: 25,
        padding: 10,
        marginLeft:-5,
        opacity:0
    },
  });