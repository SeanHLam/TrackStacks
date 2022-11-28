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
padding: 2%;
align-items:center;
justify-content:center;
`

export const ItemCont = styled.Pressable`
display: flex;
align-items:center;
justify-content:center;
padding: 5%;
margin:3%;
border-radius: 10px;
box-shadow: 5px 5px #363630;
border: 4px solid #363630;
background-color:#FFFDF4;
`



export const CostCont = styled.View`

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
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
             opacity={o} size='100' image={name}></Item>
            <AppText style='sub' text={name}></AppText>
        </ItemCont>
        <CostCont>
                <Icon  name='star' fill={"#EAAA99"} style={styles.icon}/>
                <AppText wdth='30%' style='sub' text={price}></AppText>
            </CostCont>
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

