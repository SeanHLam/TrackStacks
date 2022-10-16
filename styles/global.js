import { View,Text,} from 'react-native';
import { ApplicationProvider} from '@ui-kitten/components';
import React from 'react';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
height:100%;
display:flex;
align-items:center;
justify-content:center;
`;

export const NavWrapper = styled.View`
height:100%;
display:flex;
align-items:center;
justify-content:flex-end;
padding: 5%;
z-index: 5;
position: absolute;
`;