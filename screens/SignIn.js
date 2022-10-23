import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import NavMenu from '../components/navmenu/navmenu.js';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { useState } from 'react';
import { Wrapper, NavWrapper, SliderCont } from '../styles/global.js';
import Header from '../components/header/header.js';
import { SigninButton} from '../components/Form/Signin.js';
import { Signin } from '../components/Form/Signin.js';


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
      alignItems: 'center'}} 
      {...eva} 
      theme={eva.light}>
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
          </Wrapper>
        </SliderCont>
        <SigninButton />
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