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
 x=100,
 y=100
}) {
    
    const HandleClick = () => {
        console.log('click')
    }

    const pan = useRef(new Animated.ValueXY({x:x, y:y})).current;

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
          onPanResponderRelease: () => {
            
            console.log(pan.x,pan.y);
            pan.flattenOffset();
          }
        })
      ).current;
  
    
    return (
        <Animated.View 
        onTouchStart={onPress} 
        onTouchEnd={onRelease} 
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
