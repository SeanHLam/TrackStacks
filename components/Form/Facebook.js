import React from 'react';
import { View,Text, TextInput,StyleSheet} from 'react-native';
import styled from 'styled-components';
import AppText from '../apptext/apptext';
import { useFonts, Cabin_400Regular, Cabin_700Bold  } from '@expo-google-fonts/cabin';
import { DaysOne_400Regular } from '@expo-google-fonts/days-one';


const TextCont = styled(Text)`
font-size: ${({size1}) => 
size1 === 'header' && '38px' ||
size1 === 'header3' && '100px' ||
size1 === 'header2' && '28px' ||
size1 === 'date' && '24px' || 
size1 === 'sub' && '20px' || 
size1 === 'body' && '20px' || 
size1 === 'task' && '16px' ||
size1 === 'tasksub' && '14px' ||
'38px'
};

font-family: ${({size1}) => 
size1 === 'header' && "DaysOne_400Regular" ||
size1 === 'header2' && "DaysOne_400Regular" ||
size1 === 'header3' && "DaysOne_400Regular" ||
size1 === 'date' && 'DaysOne_400Regular' || 
size1 === 'sub' && "Cabin_700Bold" || 
size1 === 'body' && "Cabin_400Regular" || 
size1 === 'task' && "Cabin_700Bold" ||
size1 === 'tasksub' && "Cabin_400Regular" ||
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
text-align: ${ props => props.txtalign};
`

export const Facebook= ({ 
    text="Email",
    cl="black",
  style1="body",
  align="left",
}) => {
    return(
        <View style={{width:"100%", justifyContent:'center', display:"flex"}}>
            <View style={styles.container}>
            <TextCont size1={style1} col2={cl} txtalign={align}>{text}</TextCont>
            </View>
        </View>
        
        );
      
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#FFFDF4",
        width:"85%",
        borderColor:"black",
        shadowColor:"black",
        shadowOffset: {width:4, height:4},
        shadowRadius:1,
        shadowOpacity: 1,
        borderWidth:2,
        borderRadius:5,
        justifyContent:"center",
        alignContent:"center",
        alignItems:"center",
        display:"flex",
        marginLeft:25,
        padding:10,
        margin:10
    },
    input:{
        marginLeft:20
    },

  
})