import { View,Text, SafeAreaView, ScrollView,} from 'react-native';
import { ApplicationProvider} from '@ui-kitten/components';
import React from 'react';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
flex:1;
width: 100%;
height:100%;
display:flex;
align-items:center;
justify-content:center;
`;

export const NavWrapper = styled.View`
width: 100%;
height:100%;
display:flex;
align-items:center;
justify-content:flex-end;
padding: 2%;
z-index: 5;
position: absolute;
`;

export const SliderCont = styled(ScrollView)`
background-colour: "black"
`