import { View,Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import * as eva from '@eva-design/eva';
import styled from 'styled-components/native';
import { Icon } from '@ui-kitten/components';
import AppText from '../apptext/apptext';
import { user } from '../../data/userdata';
import logo from '../../assets/TSlogo.png'
import SvgUri from 'react-native-svg-uri';
import { db} from '../../firebase.js'
import { getAuth, onAuthStateChanged, auth } from 'firebase/auth';
import { doc, getDoc, getFirestore, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';

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

    useFocusEffect(
      React.useCallback(() => {
        //setCurrentUser(user.uid);
        (async () => {
  
          const auth = getAuth();
          const db = getFirestore();
          const check = onSnapshot(doc(db, 'users', "gmYamKsYiOMiHSj8e099gj0PEvn2"), (doc)=>{
            console.log("check", doc.data())
            setStars(doc.data().stars)
            // const docSnap = await getDoc(docRef);
          //     if (docSnap.exists()) {
          //       console.log(docSnap.data())
          //       setStars(docSnap.data().stars)
          //     } else {
          //       // doc.data() will be undefined in this case
          //       console.log("No such document!");
          //     }
          })
            //const docRef =  await doc(db, "users", auth.currentUser.uid);
            // const docRef =  await doc(db, "users", "gmYamKsYiOMiHSj8e099gj0PEvn2");
            
        })();
        return ()=>{}
      }, [])
    )
  
  

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
