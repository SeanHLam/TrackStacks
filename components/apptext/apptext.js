import { View,Text, StyleSheet} from 'react-native';
import React from 'react';
import * as eva from '@eva-design/eva';
import styled from 'styled-components/native';
import { useFonts, Cabin_400Regular, Cabin_700Bold  } from '@expo-google-fonts/cabin';
import { DaysOne_400Regular } from '@expo-google-fonts/days-one';

const AllText = styled(Text)`
font-size: ${({size}) => 
        size === 'header' && '34%' ||
        size === 'date' && '24%' || 
        size === 'sub' && '20%' || 
        size === 'body' && '20%' || 
        size === 'task' && '16%' ||
        size === 'tasksub' && '14%' ||
        '38px'
  };

font-family: ${({size}) => 
        size === 'header' && "DaysOne_400Regular" ||
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


    width: ${ props => props.WidWidth};
    text-align: ${ props => props.txtalign};
`

export default function AppText({

    style="body",
    text="sample text",
    c="black",
    wdth="90%",
    align="left",
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
        <AllText col={c} size={style} txtalign={align} WidWidth={wdth} >
           {text}
        </AllText>
    )
}
