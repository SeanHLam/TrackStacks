import React from 'react';
import * as eva from '@eva-design/eva';
import {Text} from 'react-native';
import { ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import NavMenu from '../components/navmenu/navmenu.js';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { useState } from 'react';
import { Wrapper, NavWrapper, SliderCont, SignInFooter, FormCont, HeadCont, HeadContInner} from '../styles/global.js';
import Header from '../components/header/header.js';
import { default as theme } from "../assets/TSTheme.json";
import AppText from '../components/apptext/apptext.js';
import{Signin} from '../components/form/signincomp';
import AppBttn from '../components/button/appbutton.js';
import styled from 'styled-components';
import {Facebook} from '../components/form/facebook';


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
    const HandleSignIn = () =>{
      navigation.navigate("Home")
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

        <SliderCont>
        <HeadCont>
          <HeadContInner>
          <AppText text='TrackStacks' style='header'></AppText>
          </HeadContInner>
        </HeadCont>
        <Wrapper>
        <FormCont>
          <Signin
            placeholder="Enter Email Address"
            value={email}
            SetValue={setEmail}
          />
          <Signin 
            placeholder="Enter Password" 
            text='Password' 
            value={password} 
            SetValue={setPassword}
            secureTextEntry={true}
          />
          <AppText text='Forgot Password?' align='left' c='blue' style='tasksub' paddingleft='3%'/>
        </FormCont>
          <AppBttn onBttn={HandleSignIn} bttntext='Sign In' style='large'/>
          <AppText text='--- or —--' style='sub' align='center' margin='5%'/>
          <Facebook text='Continue with Facebook' align='center'/>
          <SignInFooter>
            <AppText text='New user?' style='task' align='right'/>
            <AppText text='Sign Up' style='task' align='left' c='blue' paddingleft='2%'/>
          </SignInFooter>
          
          
         
        </Wrapper>
        
        
         </SliderCont>
         
       
        
         
        
      </ApplicationProvider>
    )};