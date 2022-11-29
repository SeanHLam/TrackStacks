import React from 'react';
import { Text, Icon } from '@ui-kitten/components';
import styled from 'styled-components';
import { Size } from '@ui-kitten/components/devsupport';
import { CurrentRenderContext } from '@react-navigation/native';
import {Pressable, StyleSheet} from 'react-native';
import AppText from '../apptext/apptext';
import { useFonts, Cabin_400Regular, Cabin_700Bold  } from '@expo-google-fonts/cabin';
import { DaysOne_400Regular } from '@expo-google-fonts/days-one';

export const WidgetCont = styled.Pressable`
    background-color: ${({col}) => 
    col === 'black' && '#363630' ||
    col === 'white' && '#FEFDF4' ||
    col === 'blue' && '#7B89A3' ||
    col === 'teal' && '#99FFDF' ||
    col === 'pink' && '#EAAA99' ||
    '#EAAA99'
};
    border-radius: 10px;
    box-shadow: 5px 5px #363630;
    border: 4px solid #363630;
    width: ${ props => props.WidWidth};
    height: ${ props => props.height};
    align-items:${props=>props.alig};
    align-content:${props=>props.ali};
    justify-content:${props=>props.jst};
    padding:8%;
    margin:5%;
    margin-top:${ props => props.WidMrgn};
    background-image: ${ props => props.bg}
    display:flex;
`
const TextCont = styled(Text)`
font-size: ${({size}) => 
size === 'header' && '38px' ||
size === 'header2' && '28px' ||
size === 'header3' && '24px' ||
size === 'date' && '24px' || 
size === 'sub' && '20px' || 
size === 'body' && '20px' || 
size === 'task' && '16px' ||
size === 'tasksub' && '14px' ||
'38px'
};

font-family: ${({size}) => 
size === 'header' && "DaysOne_400Regular" ||
size === 'header2' && "DaysOne_400Regular" ||
size === 'date' && 'DaysOne_400Regular' || 
size === 'sub' && "Cabin_700Bold" || 
size === 'body' && "Cabin_400Regular" || 
size === 'task' && "Cabin_700Bold" ||
size === 'tasksub' && "Cabin_400Regular" ||
"DaysOne_400Regular"
};

color: ${({col}) => 
col === 'black' && '#363630' ||
col === 'white' && '#FEFDF4' ||
col === 'blue' && '#7B89A3' ||
col === 'teal' && '#99FFDF' ||
col === 'pink' && '#EAAA99' ||
'#363630'
};
`
const TextCont2 = styled(Text)`
font-size: ${({size1}) => 
size1 === 'header' && '38px' ||
size1 === 'header3' && '80px' ||
size1 === 'header2' && '28px' ||
size1 === 'date' && '24px' || 
size1 === 'sub' && '20px' || 
size1 === 'body' && '20px' || 
size1 === 'task' && '16px' ||
size1 === 'tasksub' && '14px' ||
'38px'
};

font-family: ${({size}) => 
size === 'header' && "DaysOne_400Regular" ||
size === 'header2' && "DaysOne_400Regular" ||
size === 'header3' && "DaysOne_400Regular" ||
size === 'date' && 'DaysOne_400Regular' || 
size === 'sub' && "Cabin_700Bold" || 
size === 'body' && "Cabin_400Regular" || 
size === 'task' && "Cabin_700Bold" ||
size === 'tasksub' && "Cabin_400Regular" ||
"DaysOne_400Regular"
};

color: ${({col2}) => 
col2 === 'black' && '#363630' ||
col2 === 'white' && '#FEFDF4' ||
col2 === 'blue' && '#7B89A3' ||
col2 === 'teal' && '#99FFDF' ||
col2 === 'pink' && '#EAAA99' ||
'#363630'
}
;
margin-top:-15%;
`
const IconCont = styled.View`
display:flex;
position: ${ props => props.pos};
top:${props => props.top};
left:${props => props.left};
`

//Keep the widget empty. This way you can wrap it around any text or images when laying out.
export default function Widget ({
  alignItems="center",
  justifyContent="center",
  alignContent="center",
  width="100%",
  height="600",
  onWidget=()=>{},
  c="pink",
  text="WED",
  text1="18",
  style="body",
  cl="black",
  style1="body",
  nme="chevron-down",
  fll="#FFFDF4",
  dsp="inline",
  pos="absolute",
  top="0",
  left="0",
  marginTop='0',
  backgroundImage='none'
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
 <WidgetCont col={c}
 height={height}
  WidWidth={width} 
 jst={justifyContent} 
 ali={alignContent} 
 alig={alignItems}
 WidMrgn={marginTop}
 bg={backgroundImage}
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
    <TextCont size={style}>{text}</TextCont>
    <TextCont2 size1={style1} col2={cl} >{text1}</TextCont2>
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
