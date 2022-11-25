import React, { useEffect } from 'react';
import { Text } from '@ui-kitten/components';
import styled from 'styled-components';
import { Size } from '@ui-kitten/components/devsupport';
import { CurrentRenderContext } from '@react-navigation/native';
import { Icon } from '@ui-kitten/components';
import AppText from '../apptext/apptext';
import SubTask from './subtask';
import AddBttn from '../addbutton/addbutton';
import { useState } from 'react';


export const WidgetCont = styled.View`
    display:flex;
    background-color:#FFFDF4;
    Font-Weight:Bold;
    border-radius: 10px;
    box-shadow: 2px 2px #363630;
    border: 2px solid #363630;
    width: 90%;
    padding:5%;
    align-items:flex-start;
    align-content:center;
    margin: 5%;
`

export const AddCont = styled.View`
display:flex;
flex-direction:row;
align-items:center;
`


export default function AddDetail({
  subText = "",
  changeText=()=>{},
  onChange=()=>{},
  addTask=()=>{},
  detail="",
  subIndex=0,
  subTasks = []
}){
  const [text, onChangeText] = React.useState('Add Sub Task');
  const [subTask, setSubTask] = useState([{
    taskname:'',
    status:""
  }])

  useEffect(()=>{
    //do some firebase stuff
    onChange(subTask)
  },[subTask])
  return(
 
 <WidgetCont> 
   <AppText style='sub' text='Details'></AppText>
   {subTasks.map((o,i)=> (
    <SubTask
    t={subTasks[i]}
    onText={changeText}
    key={i}/>)
  )}
  

  <AddCont>
    {/* <AddBttn onAdd={()=>setSubTask([
      ...subTask,
      {
        taskname:"",
        status:"unfinished"
      }
    ])}></AddBttn> */}
    <AddBttn onAdd={addTask}></AddBttn>
    <AppText style='body' text='Add New'></AppText>
  </AddCont>
 
 </WidgetCont>
 
)
}



