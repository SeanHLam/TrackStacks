import React from 'react';
import { Text } from '@ui-kitten/components';
import styled from 'styled-components';
import { Size } from '@ui-kitten/components/devsupport';
import { CurrentRenderContext } from '@react-navigation/native';
import {Pressable} from 'react-native';
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
    Font-Weight:Bold;
    border-radius: 10px;
    box-shadow: 5px 5px #363630;
    border: 4px solid #363630;
    width: ${ props => props.WidWidth};
    height: ${ props => props.WidHeight};
    align-items:${props=>props.alig};
    align-content:${props=>props.ali};
    justify-content:${props=>props.jst};
    padding:5%;
    margin:5%;
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
font-size: ${({size}) => 
size === 'header' && '38px' ||
size === 'header2' && '28px' ||
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
};
`


//Keep the widget empty. This way you can wrap it around any text or images when laying out.
export default function Widget ({
  alignItems="center",
  justifyContent="center",
  alignContent="center",
  width="30%",
  height="20%",
  onWidget=()=>{},
  c="pink",
  text="WED",
  text1="18",
  style="body",
  cl="black",
 
}){ 

  let [fontsLoaded] = useFonts({
    DaysOne_400Regular,
    Cabin_400Regular,
    Cabin_700Bold 
  });

  if (!fontsLoaded) {
    return null;
  }
return(
 <WidgetCont col={c} onPress={onWidget} 
 WidHeight={height}
  WidWidth={width} 
 jst={justifyContent} 
 ali={alignContent} 
 alig={alignItems}

 > 
  <TextCont size={style}>{text}</TextCont>
  <TextCont2 col2={cl} >{text1}</TextCont2>
 </WidgetCont>
 
  )
}