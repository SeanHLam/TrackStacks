import { View,Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import * as eva from '@eva-design/eva';
import styled from 'styled-components/native';
import { Icon } from '@ui-kitten/components';
import AppText from '../apptext/apptext';
import { user } from '../../data/userdata';
import logo from '../../assets/TSlogo.png'
import SvgUri from 'react-native-svg-uri';
import {auth, db} from '../../firebase.js'
import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from 'react';

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
    const [currentUser, setCurrentUser] = useState()
    const [stars, setStars] = useState()

  useEffect(()=>{
    // get current notes from backend
    auth.onAuthStateChanged((user) => {
      if (user) {
        // User logged in already or has just logged in.
        setCurrentUser(user.uid)
      } else {
        // User not logged in or has just logged out.
      }
    });
    });

    (async () => {
      const docRef =  await doc(db, "users", currentUser);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
       
        setStars(docSnap.data().stars)
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
  })()
    
    return(
        <Cont>
            <ICont >
                <Logo source={logo}></Logo>
            </ICont>
            <SCont>
                <Icon  name='star' fill={"#EAAA99"} style={styles.icon}/>
                <AppText wdth={"15%"} align='right' text={stars} style='sub'></AppText>
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
