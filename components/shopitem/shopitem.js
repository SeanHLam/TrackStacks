import styled from 'styled-components/native';
import React from 'react';
import AppText from '../apptext/apptext';
import { Icon } from '@ui-kitten/components';
import { View,Text, StyleSheet, TextInput, Image, Pressable,} from 'react-native';
import AppBttn from '../button/appbutton';
import Item from '../assetslider/item';
import Widget from '../widgets/widget';

export const Wrapper = styled.View`
display: flex;
width:45%;
`

export const ItemCont = styled.Pressable`
display: flex;
align-items:center;
justify-content:center;
padding:2%;
padding-top:10%;
margin:5%;
border-radius: 30px;
box-shadow: 5px 5px #363630;
border: 4px solid #363630;
background-color:white;
overflow:auto;
`



export const CostCont = styled.View`
display: flex;
flex-direction: row;
align-items: center;
justify-content:center;
width:90%;
margin-top:10%;
margin-bottom:-5%;
padding:5%;
background-color:rgba(123,137,163,0.2);
border-radius: 20px 5px 20px 5px;
`



export default function ShopItem({
name="Cactus",
price=300,
onBttn=()=>{},
o=1
}){

    const bttPress = (pressType) => {
        console.log(pressType);
      };
    return (
    <Wrapper>
        <ItemCont
        onPress={onBttn}
        onPressIn={() => bttPress("onPressIn")}
        onPressOut={() => bttPress("onPressOut")}
        onLongPress={() => bttPress("onLongPress")}
        style={({ pressed }) => [
          {
            shadowOpacity: pressed
              ? 0
              : 1,
            shadowRadius: pressed
              ? 0
              : 0.1,
              shadowOffset: pressed
              ? {width:0, height:0}
              : {width:4, height:4},
              shadowColor: '#363630'
          }
        ]}
        >
          <Item 
          onImg={onBttn}
          onPressIn={() => bttPress("onPressIn")}
          onPressOut={() => bttPress("onPressOut")}
          onLongPress={() => bttPress("onLongPress")}
            opacity={o} size='100' image={name}/>

          <CostCont>
            <Icon  name='star' fill={"#EAAA99"} style={styles.icon}/>
            <AppText wdth='35%' style='task' text={price}></AppText>
          </CostCont>

        </ItemCont>
    </Wrapper>
    )
}


const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30,
        marginRight: 5,
    },
  });

