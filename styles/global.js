import { View,Text, SafeAreaView, ScrollView,} from 'react-native';
import { ApplicationProvider} from '@ui-kitten/components';
import React from 'react';
import styled from 'styled-components/native';
import { CurrentRenderContext } from '@react-navigation/native';

export const Wrapper = styled.View`
flex:1;
width: 100%;
height:100%;
display:flex;
align-items:center;
justify-content:center;
`;

export const ButtonCont = styled.View`
    display:flex;
    box-shadow: 4px 4px #363630;
`
export const WidgetCont = styled.View`
    display:flex;
    background-color:#EAAA99;
    Font-Weight:Bold;
    border-radius: 15px;
    box-shadow: 5px 5px #363630;
    border: 4px solid #363630;
    width: ${({size}) => 
    size === 'small' && '100px' ||
    size === 'large' && '200px' || 
    size === 'huge' && '300px' || 
    '300px'
};
height: ${({size}) => 
    size === 'small' && '100px' ||
    size === 'large' && '200px' || 
    size === 'huge' && '251px' || 
    '251px'
};
    align-items: center;
    align-content:center;
    justify-content:${props=>props.jst};

`


export const NavWrapper = styled.View`
width: 100%;
height: 10%;
display:flex;
align-items:center;

`;

export const SliderCont = styled(ScrollView)`
width: 100%;
`

