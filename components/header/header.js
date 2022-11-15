import { View,Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import * as eva from '@eva-design/eva';
import styled from 'styled-components/native';
import { Icon } from '@ui-kitten/components';
import AppText from '../apptext/apptext';
import { userP } from '../../data/userdata';
import logo from '../../assets/TSlogo.png'
import SvgUri from 'react-native-svg-uri';

const Cont = styled.View`
background-color: #FEFDF4;
width: 100%;
height:15%;
display: flex;
align-items: flex-end;
justify-content: center;
flex-direction: row;
padding: 5% 5% 5% 5%;

`;

const SCont = styled.View`
flex-direction: row;
width: 85%;
justify-content: flex-end;
align-items: center;
`
const ICont = styled.View`

`

const Logo = styled(Image)`
flex: 1;
aspectRatio: .6;
resizeMode: 'contain';
`

export default function Header({
}){
    
    return(
        <Cont>
            <ICont >
                <Logo source={logo}></Logo>
            </ICont>
            <SCont>
                <Icon  name='star' fill={"#EAAA99"} style={styles.icon}/>
                <AppText wdth={"15%"} align='right' text={userP.points} style='sub'></AppText>
            </SCont>
        </Cont>
    )
}

const styles = StyleSheet.create({
    icon: {

        width: 25,
        height: 25,
        marginRight: 5,
        marginLeft: 5,

    },
  });
