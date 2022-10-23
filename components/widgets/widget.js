import React from 'react';
import { Text } from '@ui-kitten/components';
import styled from 'styled-components';
import { Size } from '@ui-kitten/components/devsupport';
import { CurrentRenderContext } from '@react-navigation/native';
import {Pressable} from 'react-native';
import AppText from '../apptext/apptext';

export const WidgetCont = styled.Pressable`
    background-color: ${({col}) => 
    col === 'black' && '#363630' ||
    col === 'white' && '#FEFDF4' ||
    col === 'blue' && '#7B89A3' ||
    col === 'teal' && '#99FFDF' ||
    col === 'pink' && '#EAAA99' ||
    '#EAAA99'
};
    Font-Weight:Bold;
    border-radius: 10px;
    box-shadow: 5px 5px #363630;
    border: 4px solid #363630;
    width: ${ props => props.WidWidth};
    height: ${ props => props.WidHeight};
    align-items:${props=>props.alig};
    align-content:${props=>props.ali};
    justify-content:${props=>props.jst};
    padding:5%;
    margin:5%;

`

//Keep the widget empty. This way you can wrap it around any text or images when laying out.
export default function Widget ({
  alignItems="center",
  justifyContent="center",
  alignContent="center",
  width="30%",
  height="20%",
  onWidget=()=>{},
  c="pink",
  text="Wed",
  text1="18",
}){ 
return(
 <WidgetCont col={c} onPress={onWidget} 
 WidHeight={height}
  WidWidth={width} 
 jst={justifyContent} 
 ali={alignContent} 
 alig={alignItems}
 > 
  <Text>{text}</Text>
  <Text>{text1}</Text>
 </WidgetCont>
 
  )
}