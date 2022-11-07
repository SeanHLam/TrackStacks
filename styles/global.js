import { View,Text, SafeAreaView, ScrollView, Image} from 'react-native';
import { ApplicationProvider, Datepicker} from '@ui-kitten/components';
import React from 'react';
import styled from 'styled-components/native';
import { CurrentRenderContext } from '@react-navigation/native';
import { Icon } from '@ui-kitten/components';

export const ScreenCont = styled.View`
background-color:#FEFDF4;
`

export const Wrapper = styled.View`
display:flex;
align-items:center;
flex-direction:column;
`;

export const Wrapper1 = styled.View`
display:flex;
flex-direction:row;
justify-content:center;
width:90%;
margin-top:5%;
`;

export const Wrapper2 = styled.View`
display:flex;
flex-direction:row;
justify-content:center;
align-content:flex-end;
align-items:flex-end;
width:90%;
`;

export const Wrapper3 = styled.View`
display:flex;
`;

export const Wrapper4 = styled.View`
display:flex;
flex-direction:row;
padding:2%
padding-top:2%;
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
background-color:#FEFDF4;
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
margin-top:0%;
`

export const DecorCont = styled.View`
display:flex;
flex-direction: row;
width: 100%;
align-items:center;
`

export const DecorImage = styled(Image)`
display:flex;
justify-content: center;
align-items: center;
`

const AppIcon = styled(Icon)`
width: 20%;
height: 20%;
`

export const HomeTextCont = styled.View`
padding-left:5%;
width:100%;
`

export const WidgetWrapper = styled.View`
display:flex;
padding: 3%;
flex-direction:row;
width: 100%;
height:100%;
`;


export const WidgetWrapper2 = styled.View`
display:flex;
flex-direction:column;
width:50%;
height:50%;
`;

export const WidgetWrapper3 = styled.View`
display:flex;
flex-direction:column;
width:50%;
height:100%;
`;

export const FormCont = styled.View`
display:flex;
align-items:center;
width:100%;
`

export const HeadCont = styled.View`
background-color: #FEFDF4;
width: 100%;
height:15%;
display: flex;
align-items: flex-end;
justify-content: center;
flex-direction: row;
padding: 5% 5% 5% 5%;
margin-top:10%;
margin-bottom:10%;
`

export const HeadCont2 = styled.View`
flex-direction: row;
width: 85%;
justify-content: flex-end;
align-items: center;
`