import React from 'react';
import { View, Image, ScrollView, Text,Pressable} from 'react-native';
import styled from 'styled-components/native';
import Lavender from '../../assets/lavender.svg';
import AppleRug from '../../assets/applerug.svg';
import Cactus from '../../assets/cacts.svg';
import DarkCat from '../../assets/darkcat.svg';
import FatCat from '../../assets/fatcat.svg';
import Wolf from '../svgcomponent/wolf.js';

const Wrapper = styled.View`
background-color: #FFFDF4;
border:2px solid #363630;
border-radius: 5px;
box-shadow: 4px 4px #363630;
display: flex;

flex-direction: row;
width:65%;
margin-right:5%;
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

export default function AssetSlider() {
    
    const HandleClick = () => {
        console.log('click')
    }
    
    return (
        <Wrapper>
            <Slider showsHorizontalScrollIndicator={false} horizontal={true}>
            <Content>
                <Lavender width={100} height={100}/>
                <Divider>|</Divider>
                <AppleRug width={100} height={100}/>
                <Divider>|</Divider>
                <Lavender width={100} height={100}/>
                <Divider>|</Divider>
            </Content>
            </Slider>
        </Wrapper>
    )
}
