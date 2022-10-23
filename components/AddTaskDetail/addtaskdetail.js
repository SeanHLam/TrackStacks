import React from 'react';
import { WidgetCont1 } from '../../styles/global';
import { Text } from '@ui-kitten/components';
import styled from 'styled-components';
import { Size } from '@ui-kitten/components/devsupport';
import { CurrentRenderContext } from '@react-navigation/native';

const Checkbox = styled.View`
width:25px;
height:25px;
border:2px solid #363630;
border-radius: 5px;
box-shadow: 2px 2px #363630;
background-color:#FFFDF4;
margin-left:20px;
margin-top:20px;
`

export const AddTaskDetail = ({
  text ="Detail",
  text1 ="Subtask 1",
  text2 ="Subtask 2",
  text3 ="Subtask 3",
  text4 =" Add Subtask",
  style = "body"
  
}) => (
 <WidgetCont1 size={style}> 
 <TextCont>{text}</TextCont>
 <Checkbox/>
 <TextCont1>{text1}</TextCont1>
 <Checkbox/>
 <TextCont1>{text2}</TextCont1>
 <Checkbox/>
 <TextCont1>{text3}</TextCont1>
 <Checkbox/>
 <TextCont1>{text4}</TextCont1>
 </WidgetCont1>
 
);

const TextCont = styled(Text)`
font-weight:bold;
font-size: 15px;
padding:8px;
`
const TextCont1 = styled(Text)`
display:flex;
margin-left:60px;
margin-top:-30px;
font-size: 20px;
padding:8px;
`


