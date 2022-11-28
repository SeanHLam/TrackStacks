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
 onImg=()=>{}
}) {
    
    const HandleClick = () => {
        console.log('click')
    }
    
    return (
        <Wrapper        
        onPress={()=>onImg()}
        style={{
            opacity: opacity
        }} >
            
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
            



        </Wrapper>
    )
}
