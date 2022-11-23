import React from 'react';
import * as eva from '@eva-design/eva';
import {Text} from 'react-native';
import { ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import NavMenu from '../components/navmenu/navmenu.js';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { useState } from 'react';
import { Wrapper, NavWrapper, SliderCont, SignInFooter, FormCont, HeadCont, HeadContInner, MascotCont} from '../styles/global.js';
import Header from '../components/header/header.js';
import {Signin} from '../components/form/signincomp';
import { default as theme } from "../assets/TSTheme.json";
import AppText from '../components/apptext/apptext.js';
import styled from 'styled-components';
import AppBttn from '../components/button/appbutton';
import {auth} from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import Mascot from '../assets/mascot.svg'
import Logo from '../assets/logo.svg';

export default function SignIn({navigation, route}) { 
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');
  const [error, setError]= useState(false);
    const HandlePage = (new_page) =>{
      if(new_page === 1){
        navigation.navigate("Home")
      }else if(new_page === 2){
        navigation.navigate("Tasks")
      }else if(new_page === 3){
        navigation.navigate("Decor")
      }else if(new_page === 4){
        navigation.navigate("User")
      }else if(new_page === -1){
        navigation.navigate("SignUp")
      }
      
    }
    const HandleSignIn = (e) =>{
      e.preventDefault();
      if(email.length == 0){
        setError(true)
      }
      if(password.length == 0){
        setError(true)
      }else( navigation.navigate("Home"))
      
      signInWithEmailAndPassword(auth,email,password)
      .then((re) => {
        console.log(re);
      })
      .catch((re) => {
        console.log(re);
    })
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
            <AppText text='TrackStacks' style='header'/>
            <Logo style={{opacity:'0.4', position:'absolute', zIndex:-1, top:'-25%' }}/>
          </HeadContInner>

        <Wrapper style={{alignItems:'flex-start'}}>
        <FormCont>
          <Signin
            placeholder="Enter Email Address"
            value={email}
            SetValue={setEmail}
          />
           {error&&email.length <=0?
          <AppText text='Invalid Email' c='red' style='task'></AppText>:""}
          <Signin 
            placeholder="Enter Password" 
            text='Password' 
            value={password} 
            SetValue={setPassword}
            secureTextEntry={true}
          />
                    {error&&password.length <=0?
          <AppText text='Invalid Password' c='red' style='task'></AppText>:""}
          <AppText text='Forgot Password?' c='blue' style='tasksub'/>
        </FormCont>
          <AppBttn onBttn={HandleSignIn} bttntext='Sign In' style='small' margin='0%' marginTop='5%' marginBottom='5%'/>
          {/*<AppText text='--- or —--' style='sub' align='center' margin='5%'/>*/}
          <SignInFooter>
            <AppText text='New user?' style='task' wdth='20%'/>
            <AppText text='Sign Up' style='task' c='blue' onText={()=>HandlePage(-1)}/>
          </SignInFooter>
                
        </Wrapper>
        
        </HeadCont>

        </SliderCont>

        <MascotCont>
            <Mascot width={80} height={80} />
        </MascotCont>
         
      </ApplicationProvider>
    )};