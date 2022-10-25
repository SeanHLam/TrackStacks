import React from 'react';
import { View,Text, TextInput,StyleSheet} from 'react-native';
import styled from 'styled-components';
import AppText from '../apptext/apptext';
import { useFonts, Cabin_400Regular, Cabin_700Bold  } from '@expo-google-fonts/cabin';
import { DaysOne_400Regular } from '@expo-google-fonts/days-one';



export const Facebook= ({ 
    
}) => {
    return(
        <View style={{width:"100%", justifyContent:'center', display:"flex"}}>
            <View style={styles.container}>
           <AppText text='Continue with Facebook' align='center' style='body'/>
            </View>
            <View style={styles.container}>
           <AppText text='Continue with Google' align='center' style='body'/>
            </View>
            <View style={styles.container}>
           <AppText text='Continue with LinkedIn' align='center' style='body'/>
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