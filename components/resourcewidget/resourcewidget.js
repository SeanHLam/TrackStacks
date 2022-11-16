import React from 'react';
import { Text, Icon } from '@ui-kitten/components';
import styled from 'styled-components';
import { Size } from '@ui-kitten/components/devsupport';
import { CurrentRenderContext } from '@react-navigation/native';
import {Pressable, StyleSheet, Image} from 'react-native';
import AppText from '../apptext/apptext';
import { useFonts, Cabin_400Regular, Cabin_700Bold  } from '@expo-google-fonts/cabin';
import { DaysOne_400Regular } from '@expo-google-fonts/days-one';

export const WidgetCont = styled.Pressable`
margin:3%;
background-color: #dbfef1;
font-weight:bold;
border-radius: 10px;
box-shadow: 5px 5px #363630;
border: 4px solid #363630;
width: 85%;
position:relative;
`

const Wrapper = styled.View`
width:100%;
`

const TextCont = styled.View`
display:flex;
align-items:flex-start;
`


const Background = styled(Image)`
position: absolute;
width: 100%;
height:100%;
overflow:hidden;
z-index:-1;
border-radius:10px;
`

const FirstText = styled(Text)`
font-size: 24px;
font-family: 'DaysOne_400Regular'
color: #363630;
text-align:left; 
padding:5%;
padding-top:20%;
padding-bottom:-10%;
`

const SecondText = styled(Text)`
font-size: 24px;
font-family: 'DaysOne_400Regular'
color: #363630;
text-align:left; 
padding:5%;
padding-top:-10%;
`

const IconCont = styled.View`
width:100%;
display:flex;
position: ${ props => props.pos};
top:${props => props.top};
left:${props => props.left};
`

//Keep the widget empty. This way you can wrap it around any text or images when laying out.
export default function ResourceWidget ({
  onWidget=()=>{},
  firsttext="Tutorial",
  secondtext="Type",
  nme="chevron-down",
  fll="#FFFDF4",
  dsp="inline",
  pos="absolute",
  top="0",
  left="0%",
  marginTop='0px',
  source=''
}){ 


  let [fontsLoaded] = useFonts({
    DaysOne_400Regular,
    Cabin_400Regular,
    Cabin_700Bold 
  });

  if (!fontsLoaded) {
    return null;
  }

  const widPress = (pressType) => {
    console.log(pressType);
  };

return(
        
        <WidgetCont
        onPress={onWidget} 
        onPressIn={() => widPress("onPressIn")}
        onPressOut={() => widPress("onPressOut")}
        onLongPress={() => widPress("onLongPress")}
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
            : {width:5, height:5}
        }
        ]}
        >

        <Background
        source={source}/>

        <TextCont>
            <FirstText>{firsttext}</FirstText>
            <SecondText>{secondtext}</SecondText>
        </TextCont>
        <IconCont top={top} left={left}>
        <Icon name={nme} fill={fll} position={pos} display={dsp} style={styles.icon} ></Icon>
        </IconCont>
        </WidgetCont>
  )
}

const styles = StyleSheet.create({
  icon: {
    width: 50,
    height: 50,
    shadowOpacity:1,
    shadowOffset: {height:4, width:4},
    shadowRadius:0.1,
    shadowColor:"#363630"
},
});

