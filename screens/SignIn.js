import React from 'react';
import * as eva from '@eva-design/eva';
import {Text} from 'react-native';
import { ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import NavMenu from '../components/navmenu/navmenu.js';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { useState } from 'react';
import { Wrapper, NavWrapper, SliderCont } from '../styles/global.js';
import Header from '../components/header/header.js';
import { default as theme } from "../assets/TSTheme.json";
<<<<<<< HEAD
import { Signin } from '../components/Form/Signin.js';
import AppBttn from '../components/Button/appbutton.js';
import styled from 'styled-components';
=======
import { Signin } from '../components/form/Signin.js';
>>>>>>> 79c694ba54d4ef108b951316939bf08ad7a17bc3



const Divider = styled.Text`
color: #363630;
font-size: 25px;
font-weight:bold;

`

const TextCont = styled.Text`
display:flex;
color: #7B89A3;
font-size: 12px;
margin-left:190px;
margin-top:-10px;
text-align:right;

`
export default function SignIn({navigation, route}) { 
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');
    const HandlePage = (new_page) =>{
      if(new_page === 1){
        navigation.navigate("Home")
      }else if(new_page === 2){
        navigation.navigate("Tasks")
      }else if(new_page === 3){
        navigation.navigate("Decor")
      }else if(new_page === 4){
        navigation.navigate("User")
      }
    }
    
    return(
      <ApplicationProvider 
    style={{display: "flex", 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  }} 
    {...eva} 
    theme={
      { 
      ...eva.light,
      ...theme
    }
    }>
        <IconRegistry 
        icons={EvaIconsPack} 
        />
        <Header/>
        
        <SliderCont>
        <Wrapper>
        <Signin placeholder="Enter Email Address" value={email} SetValue={setEmail}/>
          <Signin 
          placeholder="Enter Password" 
          text='Password' 
          value={password} 
          SetValue={setPassword}
          secureTextEntry={true}
          />
          <TextCont>
          <Text>Forgot Password?</Text>
          </TextCont>
          <AppBttn bttntext='      Sign In' style='large'/>
          <Divider>--- or ---</Divider>
        </Wrapper>
        
        
         </SliderCont>
         
       
        
         
        <NavWrapper>
            <NavMenu
              activemenu={route.name}
              onHome={()=>HandlePage(1)}
              onTask={()=>HandlePage(2)}
              onDecor={()=>HandlePage(3)}
              onUser={()=>HandlePage(4)}
            ></NavMenu>
          </NavWrapper>
      </ApplicationProvider>
    )};