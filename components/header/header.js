import { View,Text, StyleSheet} from 'react-native';
import React from 'react';
import * as eva from '@eva-design/eva';
import styled from 'styled-components/native';
import { Icon } from '@ui-kitten/components';
import AppText from '../apptext/apptext';
import { user } from '../../data/userdata';


const Cont = styled.View`
background-color: #FEFDF4;
width: 100%;
height:13%;
display: flex;
align-items: flex-end;
flex-direction: row;
padding: 5% 5% 5% 5%;
`;

const SCont = styled.View`
flex-direction: row;
width: 85%;
justify-content: flex-end;
align-items: center;

`



export default function Header({
}){
    
    return(
        <Cont>
            <AppText text="LOGO"style='body'></AppText>
            
            <SCont>
                <Icon  name='star' fill={"#EAAA99"} style={styles.icon}/>
                <AppText text={user.points} style='sub'></AppText>
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
