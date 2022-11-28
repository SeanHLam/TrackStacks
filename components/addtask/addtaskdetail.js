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
background-color:#FEFDF4;
width:90%;
border:2px solid #363630;
border-radius: 5px;
box-shadow: 4px 4px #363630;
padding:3%;
margin: 0% 0% 5% 0%;
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
  onMark=()=>{},
  detail="",
  subIndex=0,
  subTasks = [],
  mark=false
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
    t={subTasks[i].taskname}
    onText={changeText}
    onCheck={onMark}
    check={subTasks[i].status}
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



