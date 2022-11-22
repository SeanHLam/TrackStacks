import React from 'react';
import { View, Image, ScrollView, Text,Pressable} from 'react-native';
import styled from 'styled-components/native';
import Lavender from '../svgcomponent/svgcomponent.js';
import { Component } from 'react';
import Svg from 'react-native-svg';

const Wrapper = styled.View`
background-color: #FFFDF4;
border:2px solid #363630;
border-radius: 5px;
box-shadow: 4px 4px #363630;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
width:65%;
margin-right:5%;
`

const Slider = styled(ScrollView)`
padding:2%;
margin-right:5%;
`

const Divider = styled.Text`
font-size: 20px;
padding:5%;
`

const Row = styled.View`
flex-direction:row;
justify-content:space-between;
align-items:space-evenly;
`

export default function AssetSlider() {
    
    const HandleClick = () => {
        console.log('click')
    }
    
    return (
        <Wrapper>
            <Slider showsHorizontalScrollIndicator={false} horizontal={true}>
                <Lavender onAsset={HandleClick}/>
            </Slider>
        </Wrapper>
    )
}
