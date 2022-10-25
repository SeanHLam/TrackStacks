import React from 'react';
import { View,Text, TextInput,StyleSheet} from 'react-native';
import styled from 'styled-components';
import { useFonts, Cabin_400Regular, Cabin_700Bold  } from '@expo-google-fonts/cabin';
import { DaysOne_400Regular } from '@expo-google-fonts/days-one';



export const Signin= ({ value,SetValue, placeholder,secureTextEntry,
    text="Email",
    
    
}) => {
    return(
        <View style={{width:"100%", justifyContent:'center', display:"flex"}}>
            <Text style={{fontWeight:"bold", fontSize:"20px", color:'#363630', marginLeft:30}}>{text}</Text>
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
        </View>
        
        );
      
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#FFFDF4",
        width:"80%",
        borderColor:"black",
        shadowColor:"black",
        shadowOffset: {width:4, height:4},
        shadowRadius:1,
        shadowOpacity: 1,
        borderWidth:2,
        borderRadius:5,
        justifyContent:"center",
        marginLeft:30,
        padding:10,
        margin:15
    },
    input:{
        marginLeft:20
    },

  
})
