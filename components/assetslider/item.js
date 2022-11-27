import React from 'react';
import { View, Image, ScrollView, Text,Pressable} from 'react-native';
import styled from 'styled-components/native';
import Lavender from '../../assets/lavender.svg';
import AppleRug from '../../assets/applerug.svg';
import Cactus from '../../assets/cactus.svg';
import DarkCat from '../../assets/darkcat.svg';
import FatCat from '../../assets/fatcat.svg';
import Wolf from '../../assets/wolf.svg';
import Mascot from '../../assets/mascot.svg'

const Wrapper = styled.View`

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

export default function Item({
 image="AppleRug"
}) {
    
    const HandleClick = () => {
        console.log('click')
    }
    
    return (
        <>
            
            {image === "AppleRug" &&
                <AppleRug width={70} height={70}/>
            } 
            {image === "Cactus" &&
                <Cactus width={70} height={70}/>
            } 
            {image === "DarkCat" &&
                <DarkCat width={70} height={70}/>
            } 
            {image === "FatCat" &&
                <FatCat width={70} height={70}/>
            } 
            {image === "Lavender" &&
                <Lavender width={70} height={70}/>
            } 
            {image === "mascot" &&
                <Mascot width={70} height={70}/>
            } 
            {image === "Wolf" &&
                <Wolf width={70} height={70}/>
            }
            



        </>
    )
}
