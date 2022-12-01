import React, { useRef } from "react";
import {Image, ScrollView, Text,Pressable, Animated, View, PanResponder} from 'react-native';
import styled from 'styled-components/native';
import Lavender from '../../assets/lavender.svg';
import AppleRug from '../../assets/applerug.svg';
import Cactus from '../../assets/cactus.svg';
import DarkCat from '../../assets/darkcat.svg';
import FatCat from '../../assets/fatcat.svg';
import Wolf from '../../assets/wolf.svg';
import Mascot from '../../assets/mascot.svg'
import { useState } from "react";
import { getAuth, onAuthStateChanged, auth } from 'firebase/auth';
import { doc, setDoc, getDoc, updateDoc, arrayUnion, arrayRemove, getFirestore, increment } from "firebase/firestore";
import { useFocusEffect } from '@react-navigation/native';
import { async } from "@firebase/util";


const Wrapper = styled.Pressable`
position:absolute;
z-index: 40;
`

const Slider = styled(ScrollView)`
padding:3%;
margin-right:5%;
`

const Divider = styled.Text`
font-size: 50px;
opacity:0.2;
`

const Content = styled.View`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
`

export default function ItemDrag({
 image="AppleRug",
 size="70",
 opacity=1,
 z=-99,
 onImg=()=>{},
 onPress=()=>{},
 onRelease=()=>{},
 posx=0,
 posy=0,
 index=0
}) {

  const [user, setUser] = useState([]);
  const [currX, setCurrX] = useState()
  const [currY, setCurrY] = useState()
  
  useFocusEffect(
    React.useCallback(() => {
      //setCurrentUser(user.uid);
      (async () => {
          const auth = getAuth();
          const db = getFirestore();
          const docRef =  await doc(db, "users", auth.currentUser.uid);
          //const docRef =  await doc(db, "users", "gmYamKsYiOMiHSj8e099gj0PEvn2");
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUser(docSnap.data().items)
          } else {
            console.log("No such document!");
          } 
      })();
      return ()=>{}
    }, [])
  )
    
    const HandleClick = () => {
        console.log('click')
    }

    const pan = useRef(new Animated.ValueXY({x:posx, y:posy})).current;

    const panResponder = useRef(
        PanResponder.create({
          onMoveShouldSetPanResponder: () => true,
          onPanResponderGrant: (e, gestureState) => {
            console.log(gestureState)
            pan.setOffset({
              x: pan.x._value,
              y: pan.y._value
            });
          },
          onPanResponderMove: Animated.event(
            [
              null,
              { dx: pan.x, dy: pan.y }
            ],  {useNativeDriver: false}
          ),
          onPanResponderRelease: async () => {
            setCurrX(pan.x)
            setCurrY(pan.y)
            pan.flattenOffset();
          }
        })
      ).current;

      const HandleRelease = async () =>{
        onRelease();
        const auth = getAuth();
        const db = getFirestore();
        const docRef = doc(db, "users", auth.currentUser.uid);
        let newArr = [...user];
        setUser(newArr)
        newArr[index].x = Math.floor(currX._value)
        newArr[index].y = Math.floor(currY._value)
       
        setUser(newArr)
        console.log(user, index)
        //console.log()
        
       setDoc(
        docRef,
        {
          items : user,
        },
        {merge: true}
      )
        

      }
      
    
    return (
        <Animated.View 
        onTouchStart={onPress} 
        onTouchEnd={HandleRelease} 
        onPress={()=>onImg()}
        style={{
            position:"absolute",
            opacity: opacity,
            zIndex:z,
            transform: [{ translateX: pan.x }, { translateY: pan.y }],
            
        }}
        {...panResponder.panHandlers} 
        >
        
            
            {image === "Apple Rug" &&
                <AppleRug width={size} height={size}/>
            } 
            {image === "Cactus" &&
                <Cactus width={size} height={size}/>
            } 
            {image === "Dark Cat" &&
                <DarkCat width={size} height={size}/>
            } 
            {image === "Fat Cat" &&
                <FatCat width={size} height={size}/>
            } 
            {image === "Lavender" &&
                <Lavender width={size} height={size}/>
            } 
            {image === "Mascot" &&
                <Mascot width={size} height={size}/>
            } 
            {image === "Wolf" &&
                <Wolf width={size} height={size}/>
            }
            
        </Animated.View>
    )
}
