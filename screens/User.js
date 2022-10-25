import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import NavMenu from '../components/navmenu/navmenu.js';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { useState } from 'react';
import { Wrapper, NavWrapper, SliderCont } from '../styles/global.js';
import Header from '../components/header/header.js';
import { default as theme } from "../assets/TSTheme.json";
import AppText from '../components/apptext/apptext.js';
import SetWidget from '../components/settingswidget/settingswidget.js';

export default function User({navigation, route}) { 
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
        <Header/>
        <SliderCont>
          <Wrapper>
            <AppText text='Settings'></AppText>
            <SetWidget></SetWidget>
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