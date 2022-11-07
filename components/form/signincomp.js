import React from 'react';
import { View,Text, TextInput,StyleSheet} from 'react-native';
import styled from 'styled-components';
import { useFonts, Cabin_400Regular, Cabin_700Bold  } from '@expo-google-fonts/cabin';
import { DaysOne_400Regular } from '@expo-google-fonts/days-one';

const TextCont = styled.View`
display:flex;
align-items:flex-start;
margin-bottom:-3%;
margin-top:3%;
`

const InputCont = styled.View`
display:flex;
justify-content:center;
align-items:center;
`

export const Signin= ({ value,SetValue, placeholder,secureTextEntry,
    text="Email",
    
    
}) => {
    return(
        <View style={{width:"85%"}}>
                <TextCont>
                    <Text style={{fontWeight:"bold", fontSize:"20px", color:'#363630'}}>{text}</Text>
                </TextCont>
                <InputCont>
                    <View style={styles.container}>
                    <TextInput 
                    value={value} 
                    onChangeText={SetValue} 
                    placeholder={placeholder} 
                    style={styles.input}
                    secureTextEntry={secureTextEntry}
                    >
                    </TextInput>
                    </View>
                </InputCont>
        </View>
        
        );
      
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#FFFDF4",
        width:"100%",
        borderColor:"#363630",
        shadowColor:"#363630",
        shadowOffset: {width:4, height:4},
        shadowRadius:0.1,
        shadowOpacity: 1,
        borderWidth:2,
        borderRadius:5,
        padding:10,
        margin:10,
    },
    input:{
        justifyContent:"flex-start",
    },

  
})
