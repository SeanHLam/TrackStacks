import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import NavMenu from '../components/navmenu/navmenu.js';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { useState } from 'react';
import { Wrapper, NavWrapper, SliderCont, SignInFooter, FormCont, HeadCont, HeadContInner } from '../styles/global.js';
import Header from '../components/header/header.js';
import Category from '../components/categorymenu/categorymenu.js';
import { default as theme } from "../assets/TSTheme.json";
import AppText from '../components/apptext/apptext.js';
import {Signin} from '../components/form/signincomp';
import AppBttn from '../components/button/appbutton';
import {Facebook} from '../components/form/facebook';
import {auth} from '../firebase'
import {auth, db} from '../firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore"; 

// .then( async (re) => {
//   try {
//     const docRef = await addDoc(collection(db, "users"), {
//       username: username,
//       email:email,
//       stars:0,
      
//     });
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// })




export default function SignUp({navigation, route}) { 
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');
  const [username, setUserName]= useState('');
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




    const HandleSignUp = async () =>{
      navigation.navigate("SignIn")
      createUserWithEmailAndPassword(auth,email,password,username)
     
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
          <AppText text='Break through with TrackStacks' style='sub'></AppText>
          </HeadContInner>
        </HeadCont>
        <Wrapper>
        <FormCont>
        <AppText text='Manage your tasks efficiently' align='left' c='black' style='sub' paddingleft='5%'/>
        <AppText text='Tell us more about you!' align='left' c='blue' style='tasksub' paddingleft='5%'/>
        <Signin
            placeholder="Enter Username"
            value={username}
            SetValue={setUserName}
            text=''
          />
          <Signin
            placeholder="Enter Email Address"
            value={email}
            SetValue={setEmail}
            text=''
          />
          <Signin 
            placeholder="Enter Password" 
            text='' 
            value={password} 
            SetValue={setPassword}
            secureTextEntry={true}
          />
          <AppText text='Yes, I want to recieve TrackStacks emails' align='left' c='black' style='tasksub' paddingleft='5%'/>
          <AppText text='I agree to all the' align='left' c='black' style='tasksub' paddingleft='5%'/> 
          <AppText text='Terms and Conditions' align='center' c='blue' style='tasksub'/>
        </FormCont>
          <AppBttn onBttn={HandleSignUp} bttntext='Sign Up' style='large'/>
          <SignInFooter>
            <AppText text='Already have account?' style='task' align='right'/>
            <AppText text='Sign in' style='task' align='left' c='blue' paddingleft='3%'/>
          </SignInFooter>
          
          
         
        </Wrapper>
        
        
         </SliderCont>
         
   
      </ApplicationProvider>
    )};