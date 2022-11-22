import { FlexStyleProps } from '@ui-kitten/components/devsupport';
import React from 'react';
import { View,Text, TextInput,StyleSheet} from 'react-native';
import styled from 'styled-components';
import AppText from '../apptext/apptext';
import { Icon } from '@ui-kitten/components';
import { colour } from '../navmenu/navdata';




export const Facebook= ({ 
    activemenu = "Home"
    
}) => {
    return(
        <View style={{width:"100%", justifyContent:'center', display:"flex", alignItems:"center"}}>
           
            <View style={styles.container}>
                <View style={styles1.container2}>
                <Icon name='facebook' fill={colour[activemenu].brush} style={styles3.icon}/>
                </View>
                <AppText text='Continue with Facebook' align='left' style='sub' />
            </View>
            <View style={styles.container}>
                <View style={styles1.container2}>
                <Icon name='google' fill={colour[activemenu].brush} style={styles3.icon}/>
                </View>
                <AppText text='Continue with Google' align='left' style='sub'/>
            </View>
            <View style={styles.container}>
                <View style={styles1.container2}>
                <Icon name='linkedin' fill={colour[activemenu].brush} style={styles3.icon}/>
                </View>
                 <AppText text='Continue with LinkedIn' align='left' style='sub'/>
            </View>
        </View>
        
        );
      
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#FFFDF4",
        width:"85%",
        borderColor:"#363630",
        shadowColor:"#363630",
        shadowOffset: {width:4, height:4},
        shadowRadius:0.1,
        shadowOpacity: 1,
        borderWidth:2,
        borderRadius:5,
        alignContent:"center",
        alignItems:"center",
        display:"flex",
        flexDirection:"row",
        margin:10
    }
    

  
})
const styles1 = StyleSheet.create({
    container2:{
        display:"flex",
        width:55,
        justifyContent:"flex-start",
        alignContent:"flex-start",
        alignItems:'center',
        flexDirection:'column',
        backgroundColor:"#7B89A3",
        borderRadius: "3px 0px 0px 0px",
        marginRight:30
    }
    

  
})
const styles3 = StyleSheet.create({
    icon: {
      width: 25,
      height: 40,
      padding:15
    },
  });
