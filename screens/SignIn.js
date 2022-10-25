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
import AppText from '../components/apptext/apptext.js';
import{Signin} from '../components/form/Signincomo';
import AppBttn from '../components/button/appbutton.js';
import styled from 'styled-components';
import {Facebook} from '../components/form/Facebook';






const Divider = styled.Text`
color: #363630;
font-size: 25px;
font-weight:bold;

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
          
          <AppText text='Forgot Password?' align='right' c='blue' style='tasksub'/>
         
          <AppBttn bttntext='  Sign In' style='large'/>
          <Facebook text='Continue with Facebook' style1='body' align='center'/>
          
         
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