import React, {useState} from 'react';
import styled from 'styled-components/native';
import { Icon } from '@ui-kitten/components';
import { View,Text, StyleSheet} from 'react-native';
import AppText from '../apptext/apptext.js';
import { CategoryTag } from '../tasklist/tasklist.js';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
const DropDownCont = styled.View`
width:90%;
`

const Category = styled.View`
display:flex;
flex-direction:row;
justify-content:flex-start;
align-items:center;
width:100%;
padding-left:10%;
padding-top:5%;
padding-bottom:3%;
`

const CategoryID = styled(CategoryTag)`
position:static;
right:0;
margin-right:5%;
`

export default function DropDown({
    typ="Single",
    txt="Category",
    onChange=()=>{},
})
{
    return (
        <DropDownCont>
            <Pressable onPress={onChange}>
            <Category>
                <CategoryID clr={typ} size="40px"/>
                <AppText text={txt} style="body"/>
            </Category>
            </Pressable>
        </DropDownCont>
    )
}
