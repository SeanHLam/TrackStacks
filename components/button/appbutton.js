import React, {useState} from 'react';
import { ButtonCont  } from '../../styles/global';
import { Layout, Text } from '@ui-kitten/components';
import styled from 'styled-components';
import { Button, TouchableOpacity, Pressable, StyleSheet  } from 'react-native';
import AppText from '../apptext/apptext';
import { Icon } from '@ui-kitten/components';

export const Buttonst = styled.Pressable`
display:flex;
background-color:#EAAA99;
border:2px solid #363630;
width: ${({size}) => 
size === 'small' && '30%' ||
size === 'large' && '40%' || 
size === 'huge' && '60%' || 
'40%'
};
flex-direction:row;
justify-content:center;
align-items:center;
align-content:center;
text-align:center;
border-radius: 10px;
padding:3%;
`
export default function AppBttn({
  bttntext ="Sign Up",
  style = "large",
  alignItems="center",
  onBttn=()=>{},
  nme="star",
  clr="#fcf9ed",
  dsp='none',
  margin='3%',
  marginTop='0%',
  marginBottom='0%',
  marginLeft="0%",
  styl='sub'
}){

  const bttPress = (pressType) => {
    console.log(pressType);
  };

    return(
     
      <Buttonst 
      margin={margin}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      size={style} 
      onPress={onBttn}
      onPressIn={() => bttPress("onPressIn")}
      onPressOut={() => bttPress("onPressOut")}
      onLongPress={() => bttPress("onLongPress")}
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
            : {width:4, height:4},
            shadowColor: '#363630'
        }
      ]}
      /*style={{
        shadowOpacity: isPress ? '0' : '1',
        shadowRadius: isPress ? '0' : '0.1',
        shadowOffset: isPress ? { width: 0, height: 0} : { width:4, height:4 }
      }}*/
      > 
        <Icon name={nme} fill={clr} display={dsp} style={styles.icon}></Icon>
         <AppText align='center' c="black" style={styl} text={bttntext}/>
      </Buttonst>

    )
}


const styles = StyleSheet.create({
  icon: {
      width: 30,
      height: 30,
      marginLeft:10,
      marginRight:-10
  },
});