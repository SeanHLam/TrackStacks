import { View,Text, StyleSheet} from 'react-native';
import React from 'react';
import * as eva from '@eva-design/eva';
import styled from 'styled-components/native';
import { useFonts, Cabin_400Regular, Cabin_700Bold  } from '@expo-google-fonts/cabin';
import { DaysOne_400Regular } from '@expo-google-fonts/days-one';

const AllText = styled(Text)`
font-size: ${({size}) => 
        size === 'header' && '38px' ||
        size === 'sub' && '20px' || 
        size === 'body' && '20px' || 
        '38px'
  };

font-family: ${({size}) => 
        size === 'header' && "DaysOne_400Regular" ||
        size === 'sub' && "Cabin_700Bold" || 
        size === 'body' && "Cabin_400Regular" || 
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

export default function AppText({

    style="body",
    text="sample text",
    c="black"
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
        <AllText col={c} size={style}>
           {text}
        </AllText>
    )
}
