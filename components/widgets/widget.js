import React from 'react';
import { WidgetCont } from '../../styles/global';
import { Text } from '@ui-kitten/components';
import styled from 'styled-components';
import { Size } from '@ui-kitten/components/devsupport';
import { CurrentRenderContext } from '@react-navigation/native';



export const Widget1 = ({
  text ="WED",
  text1 ="18",
  justifyContent="center",
  style = "body"
  
}) => (
 <WidgetCont size={style} jst={justifyContent}> 
 <TextCont>{text}</TextCont>
 <TextCont1>{text1}</TextCont1>
 </WidgetCont>
 
);

const TextCont = styled(Text)`
font-weight:bold;
display:flex;
justify-content:center;
font-size: 28px;
text-align:center;
`
const TextCont1 = styled(Text)`
font-weight:bold;
display:flex;
justify-content:center;
font-size: 110px;
text-align:center;

`


