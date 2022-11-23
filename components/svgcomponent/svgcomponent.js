import React from "react";
import { Image } from "react-native-svg";
import styled from 'styled-components/native';
import Lavender from '../../assets/lavender.svg';

const Dynamic = styled(Image)`
width:100%;
`

const Cont = styled.View`
width:100%;
height:100%;
`
export default function SvgTest({
asset=Lavender,
onAsset=()=>{},
}){ 
    return (
        <Cont>
        <Dynamic
        source={asset}
        >
        </Dynamic>
        </Cont>

)};



