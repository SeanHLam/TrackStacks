import { View,Text, SafeAreaView, ScrollView, Image} from 'react-native';
import { ApplicationProvider, Datepicker} from '@ui-kitten/components';
import React from 'react';
import styled from 'styled-components/native';
import { CurrentRenderContext } from '@react-navigation/native';

export const Wrapper = styled.View`
flex:1;
width: 100%;
height:100%;
display:flex;
align-items:center;
justify-content:center
flex-direction:column;

`;
export const Wrapper1 = styled.View`
flex:1;
display:flex;
flex-direction:row;
`;
export const Wrapper2 = styled.View`
flex:1;
display:flex;
flex-direction:row;
margin-top:25px;
`;
export const Wrapper3 = styled.View`
flex:1;
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
margin-top: 3%;
margin-bottom:5%;
`;
export const Wrapper4 = styled.View`
display:flex;
flex-direction:row;
margin-right:120px;
margin-left:155px;
margin-top:30px;
`;

export const ButtonCont = styled.View`
    width: 100%;
    height: 100%;
    display:flex;
    align-items:${props=>props.ali};
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
    align-items:${props=>props.alig};
    align-content:${props=>props.ali};
    justify-content:${props=>props.jst};`

export const NavWrapper = styled.View`
width: 100%;
height: 10%;
display:flex;
align-items:center;

`;

export const SliderCont = styled(ScrollView)`
width: 100%;
`

export const HeaderCont = styled.View`
display:flex;
flex-direction: row;
align-items: center;
width:100%;
padding:3%;
`

export const AddCont = styled.View`
display:flex;
flex-direction: row;
align-items: center;
justify-content: flex-end;
width:90%;
`
export const PickDate = styled(Datepicker)`
width: 90%;
background-color:#FEFDF4;
padding:3%;
border:2px solid #363630;
border-radius: 5px;
box-shadow: 4px 4px #363630;
`


export const TaskContWrapper = styled.View`
margin-top:10%;
`

export const DecorCont = styled.View`
display:flex;
flex-direction: row;
width: 100%;

`

export const DecorImage = styled(Image)`
display:flex;
justify-content: center;
align-items: center;


`