import React, {useState} from 'react';
import { Text } from '@ui-kitten/components';
import styled from 'styled-components';
import { Size } from '@ui-kitten/components/devsupport';
import { CurrentRenderContext } from '@react-navigation/native';
import { Icon } from '@ui-kitten/components';
import AppText from '../apptext/apptext';
import {TextInput, StyleSheet, Pressable} from 'react-native';

import Checkbox from 'expo-checkbox';



export const WidgetCont = styled.View`
    display:flex;
    flex-direction: row;
    margin:3%;
    align-items:flex-start;
    align-content:center;
`
const TaskType = styled(TextInput)`
font-family: Cabin_400Regular;
color: #363630;
font-size: 20px;
width:90%
`

export default function SubTask({
t="dwd",
onText = ()=>{}
}){
const [text, onChangeText] = React.useState('');
const [isChecked, setChecked] = useState(false);
return(
 <WidgetCont> 
    <Checkbox 
        style={styles.checkbox}
        value={false}
        onValueChange={setChecked}
        color={false ? '#363630' : '#FFFDF4'}
        >
    </Checkbox> 

   <TaskType
        onChangeText={onText} 
        placeholder="Add Step"
        value={t}
        maxLength={20}
        defaultValue={"Title"}
   ></TaskType>
 
 </WidgetCont>
 
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
        marginRight: 20,
    }
  });



