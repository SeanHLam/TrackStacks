import { View,Text,} from 'react-native';
import React from 'react';
import * as eva from '@eva-design/eva';
import styled from 'styled-components/native';
// import { Icon } from '@ui-kitten/components';

const Cont = styled.View`
background-color: #363630;
width: 85%;
height:10.5%;
border-radius: 30px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
`;

export default function NavMenu(){
    
    return(
        <Cont>
             {/* <Icon
        fill='#8F9BB3'
        name='star'
        /> */}
        </Cont>
    )
}