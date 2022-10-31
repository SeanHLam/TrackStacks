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
        <View style={{width:"100%", justifyContent:'center', display:"flex"}}>
           
            <View style={styles.container}>
                <View style={styles1.container2}>
                <Icon name='facebook' fill={colour[activemenu].brush} style={styles3.icon}/>
                </View>
                <AppText text='Continue with Facebook' align='center' style='body' />
            </View>
            <View style={styles.container}>
            <View style={styles1.container2}>
                <Icon name='google' fill={colour[activemenu].brush} style={styles3.icon}/>
                </View>
                <AppText text='Continue with Google' align='center' style='body'/>
            </View>
            <View style={styles.container}>
            <View style={styles1.container2}>
                <Icon name='linkedin' fill={colour[activemenu].brush} style={styles3.icon}/>
                </View>
                 <AppText text='Continue with LinkedIn' align='center' style='body'/>
            </View>
        </View>
        
        );
      
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#FFFDF4",
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
        flexDirection:"row",
        margin:10
    }
    

  
})
const styles1 = StyleSheet.create({
    container2:{
        display:"flex",
        flex:1,
        justifyContent:"flex-start",
        alignContent:"flex-start",
        alignItems:'flex-start',
        flexDirection:'column',
        backgroundColor:"#7B89A3",
        borderRadius: "3px 0px 0px 0px",
    }
    

  
})
const styles3 = StyleSheet.create({
    icon: {
      width: 30,
      height: 50,
      marginRight: 25,
      
    },
  });
