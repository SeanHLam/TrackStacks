import { View,Text, SafeAreaView, ScrollView, Image} from 'react-native';
import { ApplicationProvider, Datepicker, RangeDatepicker, Select, SelectItem, Layout} from '@ui-kitten/components';
import React from 'react';
import styled from 'styled-components/native';
import { CurrentRenderContext } from '@react-navigation/native';
import { Icon } from '@ui-kitten/components';

export const ScreenCont = styled.View`
background-color:#FFFDF4;
`

export const Wrapper = styled.View`
display:flex;
align-items:center;
flex-direction:column;

`;

export const SignUpWrapper = styled.View`
display:flex;
flex-direction:column;
`;

export const ButtonWrapper = styled.View`
display:flex;
flex-direction:row;
justify-content:space-evenly;
margin-bottom:10%;
max-width:100%;
`;

export const SignInFooter = styled.View`
display:flex;
flex-direction:row;
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

export const SelectCont = styled(Layout)`
background-color:#FEFDF4;
width:85%;
border:2px solid #363630;
border-radius: 5px;
box-shadow: 4px 4px #363630;
padding:3%;
margin: 4% 0% 5% 0%;
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
width: 85%;
background-color:#FEFDF4;
padding:3%;
border:2px solid #363630;
border-radius: 5px;
box-shadow: 4px 4px #363630;
margin: 0% 0% 5% 0%;
`

export const PickDateRange = styled(RangeDatepicker)`
width: 85%;
background-color:#FEFDF4;
padding:3%;
border:2px solid #363630;
border-radius: 5px;
box-shadow: 4px 4px #363630;
margin-bottom: 5%;
`


export const TaskContWrapper = styled.View`
margin-top:5%;
`

export const HomeTaskCont = styled.View`
display:flex;
align-items:center;
flex-direction:column;
`

export const DecorCont = styled.View`
width: 85%;
display:flex;
flex-direction: row;
align-items:center;
justify-content:space-between;
margin-bottom:5%;
margin-top:5%;
`

export const DecorImage = styled(Image)`
width: 85%;
resizeMode:'contain'
margin-bottom:5%;
display: grid;
grid-template-columns: 2fr 1fr repeat(2, 1.5fr) 1fr 2fr;
grid-template-rows: repeat(5, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
z-index: -30;
`

const AppIcon = styled(Icon)`
width: 20%;
height: 20%;
`

export const HomeTextCont = styled.View`
margin-left:8%;
width:100%;
margin-top:3%;
`

export const WidgetWrapper = styled.View`
padding: 5%;
`;


export const ColumnOneWrapper = styled.View`
display:flex;
flex-direction:row;
width:50%;
max-height:100%;
`;

export const ColumnTwoWrapper = styled.View`
display:flex;
flex-direction:row;
width:50%;
max-height:100%;
`;

export const FormCont = styled.View`
display:flex;
align-items:flex-start;
width:100%;
margin-top:7%;
`

export const HeadCont = styled.View`
margin-left:7%;
width:100%;
`

export const HeadContInner = styled.View`
display:flex;
width:100%;
height:auto;
margin-top:25%;
`

export const ResourceWidgetCont = styled.View`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:100%;
`

export const AssetCont = styled.View`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:auto;
margin-bottom: 7%;
`

export const MascotCont = styled.View`
background-color:#FEFDF4;
`

export const ProfileCont = styled.View`
display:flex;
flex-direction: row;
margin-top:5%;
margin-bottom:8%;
width:85%;
`

export const ProfileInfoCont = styled.View`
display:flex;
flex-direction: column;
justify-content:space-around;
margin-left:5%;
`

export const CenterCont= styled.View`
display:flex;
justify-content:center;
align-items:center;
width:85%;
`

export const DecorBubble = styled.View`
position:absolute;
width:95%;
height:16%;
top:79%;
background-color:${props=>props.bg};
z-index:-1;
border-radius:10px;
`

export const ConfettiContainer = styled.View`
position:absolute;
width:800px;
height:700px;
`