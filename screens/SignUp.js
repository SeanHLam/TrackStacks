import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import NavMenu from '../components/navmenu/navmenu.js';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { useState } from 'react';
import { SignUpWrapper, NavWrapper, SliderCont, SignInFooter, FormCont, HeadCont, HeadContInner, MascotCont } from '../styles/global.js';
import Header from '../components/header/header.js';
import Category from '../components/categorymenu/categorymenu.js';
import { default as theme } from "../assets/TSTheme.json";
import AppText from '../components/apptext/apptext.js';
import {Signin} from '../components/form/signincomp';
import AppBttn from '../components/button/appbutton';
import {auth, db} from '../firebase.js'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, setDoc, doc} from "firebase/firestore"; 
import { useFocusEffect } from '@react-navigation/native';
import Logo from '../assets/logo.svg';
import Mascot from '../assets/mascot.svg';

export default function SignUp({navigation, route}) { 
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');
  const [username, setUserName]= useState('');
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
      }else if(new_page === 5){
        navigation.navigate("SignIn")
      }
    }
   
    const HandleSignUp = async (e) =>{
      e.preventDefault();
      if(username.length == 0){
        setError(true)
      }if(email.length == 0){
        setError(true)
      }
      if(password.length == 0){
        setError(true)
      }else(navigation.navigate("SignIn"))
      
      
      createUserWithEmailAndPassword(auth,email,password,username)
      .then( async (re) => {
        
        try {
          const docRef = await setDoc(doc(db, "users", auth.currentUser.uid), {
            uid: auth.currentUser.uid,  
            displayName: username,
            email:email,
            stars:0,
            settings:{
              notifications:true,
              sound:true,
              contrast:true,
              memo:true,
            },
            stats:{
              done: 0,
              doing: 0,
              spent: 0,
              earned: 0,
            },
            tasks:[

            ],

            items:[
              
            ]

          });
          console.log("Document written with ID: ", auth.currentUser.uid);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
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
            <AppText text='Break through with TrackStacks' style='date'></AppText>
            <Logo style={{opacity:'0.4', position:'absolute', zIndex:-1, top:'-15%' }}/>
            </HeadContInner>

        <SignUpWrapper>
        <FormCont>
        <HeadContInner style={{marginTop:'1%'}}>
          <AppText text='Start managing your tasks efficiently.' c='black' style='sub'/>
          <AppText text='Tell us more about you!' c='blue' style='tasksub'/>
        </HeadContInner>
        <Signin
            placeholder="Enter Username"
            value={username}
            SetValue={setUserName}
            text='Enter Username'
          />
          {error&&username.length <=0?
          <AppText text='Invalid Username' c='red' style='task'></AppText>:""}
          <Signin
            placeholder="Enter Email Address"
            value={email}
            SetValue={setEmail}
            text='Enter Email Address'
          />
          {error&&email.length <=0?
          <AppText text='Invalid Email' c='red' style='task'></AppText>:""}
          <Signin 
            placeholder="Enter Password" 
            text='Enter Password' 
            value={password} 
            SetValue={setPassword}
            secureTextEntry={true}
          />
          {error&&password.length <=0?
          <AppText text='Invalid Password' c='red' style='task'></AppText>:""}
          {/*<AppText text='Yes, I want to recieve TrackStacks emails' align='left' c='black' style='tasksub' paddingleft='5%'/>
          <AppText text='I agree to all the' align='left' c='black' style='tasksub' paddingleft='5%'/> 
          <AppText text='Terms and Conditions' align='center' c='blue' style='tasksub'/>*/}
        </FormCont>
          <AppBttn onBttn={HandleSignUp} bttntext='Sign Up' style='small' margin='0%' marginTop='5%' marginBottom='5%'/>
          <SignInFooter>
            <AppText text='Already have an account?' style='task' wdth='47%'/>
            <AppText text='Sign In' style='task' wdth='20%' c='blue' onText={()=>{HandlePage(5)}}/>
          </SignInFooter>
         
        </SignUpWrapper>
        
        </HeadCont>
          
        </SliderCont>
        
        <MascotCont>
            <Mascot width={80} height={80} />
        </MascotCont>
   
      </ApplicationProvider>
    )};