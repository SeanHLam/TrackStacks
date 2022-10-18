import { View,Text,} from 'react-native';

import React from 'react';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
background-color: black;
width: 95%;
height:8%;
border-radius: 30px;
display:flex;
align-items:center;
justify-content:center;
`;
export const ButtonCont = styled.View`
    width:${props=>props.wth};
    height:${props=>props.hght};
    display:flex;
    justify-content:center;
    align-content:center;
    align-items:center;
    box-shadow: 4px 4px #363630;
`
