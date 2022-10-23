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
margin:15px;
width:40px;
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
width: 230px;
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
height:${props=>props.size || "50px"};
width: 5%;
display:flex;
border-radius: 4px 6px 6px 4px;
box-shadow: -3px 0px #363630;
position:absolute;
right: 15px;
background-color: ${({clr}) =>
                    clr === 'To-Do' && '#5C7457' ||
                    clr === 'Long-Term' && '#85C0FF' ||
                    clr === 'Single' && '#89608E'
                };
`

const Wrap = styled.View`
position:flex;
`

export default function TaskList({
onDone=()=>{},
num="0",
date="Date",
tlt="Task Title",
sub="CATEGORY",
typ="single",
sz="50px",

})
{ 
    const [isChecked, setChecked] = useState(false);
    return (
        <Cont>
            <Pressable onPress={onDone}>
                <Checkbox style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? '#363630' : '#FFFDF4'}
                >
                </Checkbox>
            </Pressable>        

           <DateCont>
                <AppText text={num} style="date" c="black"/>
                <AppText text={date} style="body" c="black" />
            </DateCont>
            <ListCont>
                <TextCont>
                    <AppText text={tlt} style="task" c="black"/>
                    <AppText text={sub} style="tasksub" c="pink"/>
                    <CategoryTag clr={typ} size={sz}/>
                </TextCont>
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
    }
  });