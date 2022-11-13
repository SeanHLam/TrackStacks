import { View,Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import * as eva from '@eva-design/eva';
import styled from 'styled-components/native';
import { Icon } from '@ui-kitten/components';
import AppText from '../apptext/apptext';
import { user } from '../../data/userdata';
import logo from '../../assets/TSlogo.png'

const Cont = styled.View`
background-color: #FFFDF4;
flex-direction: row;
width: 100%;
height:12%;
display: flex;
align-items: center;
justify-content:center;
padding: 10% 5% 5% 5%;
`;

const SCont = styled.View`
flex-direction: row;
display:flex;
flex:1;
justify-content: flex-end;
padding-right:5%;
padding-top:3%;
`
const ICont = styled.View`
display:flex;
align-items:center;
justify-content:flex-start;
margin-left:5%;
`

const Logo = styled(Image)`
flex: 1 ;
aspectRatio: 1;
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
                <AppText wdth={"20%"} align='right' text={user.points} style='sub'></AppText>
            </SCont>
        </Cont>
    )
}

const styles = StyleSheet.create({
    icon: {

        width: 25,
        height: 25,
        marginRight: 0,
        marginLeft: 0,

    },
  });
