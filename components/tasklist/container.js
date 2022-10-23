import { View,Text, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import React, { useState } from 'react';
import AppText from '../apptext/apptext';
import { Icon } from '@ui-kitten/components';
import TaskList from './tasklist';
import {recent, urgent} from './taskdata';


const MainCont = styled.View`
width: 100%;
`
 
const HeaderCont = styled.View`
width: 100%;
display:flex;
flex-direction:row;
justify-content:flex-start;
margin-left:32px;

`

const IconCont = styled.View`
background-color:#FFFDF4;
border-radius: 5px;
box-shadow: 2px 2px #363630;
padding:3px;
display:flex;
justify-content:center;
align-content:center;
`

export default function TaskCont(){
    
    const [list, setList] = useState("recent");
    if (list === "recent"){
        recent.tlt = {urgent}
    } else if (list === "urgent"){
        recent.tlt = {recent}
    }
    

    return (
        <MainCont>
            <HeaderCont>
                <AppText style="sub"
                c="black"
                text="Recently Added">
                </AppText>
                <Icon name='home' style={styles.icon}/>
                <IconCont onClick={ () => { setList("urgent") } } >
                    <Icon name="refresh"
                    style={styles.icon}
                    fill="black"
                    />
                </IconCont>
            </HeaderCont>


            {recent.map((o,i)=>
                <TaskList tlt={recent[i].title}
                num={recent[i].num}
                date={recent[i].date}
                typ={recent[i].cat}
                sub={recent[i].cat}
                onClick={()=> removeTodo()}
                />)
            }

            
        </MainCont>
    )
}

const styles = StyleSheet.create({
    icon: {
      width: 18,
      height: 18,
    },
  });