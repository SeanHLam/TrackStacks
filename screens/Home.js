
import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import NavMenu from '../components/navmenu/navmenu.js';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { useState } from 'react';
import { Wrapper, NavWrapper, SliderCont } from '../styles/global.js';
import { Text, } from 'react-native';
import AppText from '../components/apptext/apptext.js';
import { Button1 } from '../components/Button/Button1.js';
import { Widget1 } from '../components/widgets/widget.js';
import TaskList from '../components/tasklist/tasklist.js';
import Header from '../components/header/header.js';


export default function Home({navigation, route}) { 
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
        
          <TaskList style="header"
          num="3"
          date="Mon"
          typ="longterm">
          </TaskList>
        </Wrapper>

        
        <NavWrapper>
        
        <NavMenu
        activemenu={pages}
        onHome={()=>HandlePage(1)}
        onTask={()=>HandlePage(2)}
        onDecor={()=>HandlePage(3)}
        onUser={()=>HandlePage(4)}
        ></NavMenu>
      </NavWrapper>
          
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