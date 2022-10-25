import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Calendar, IconRegistry} from '@ui-kitten/components';
import NavMenu from '../components/navmenu/navmenu.js';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { useState } from 'react';
import { Wrapper, NavWrapper, SliderCont } from '../styles/global.js';
import { Text,Image, StyleSheet } from 'react-native';
import AppText from '../components/apptext/apptext.js';
import AppBttn, { SigninButton} from '../components/button/appbutton.js';
import TaskList from '../components/tasklist/tasklist.js';
import Header from '../components/header/header.js';
import { Widget1 } from '../components/widgets/widget.js';
import { default as theme } from "../assets/TSTheme.json";
import ModalPop from '../components/modal/modal.js';
import AddBttn from '../components/addbutton/addbutton.js';
import Widget from '../components/widgets/widget.js';
import { Wrapper1, Wrapper2, Wrapper3 } from '../styles/global.js';
import TaskCont from '../components/tasklist/container.js';
import { Icon } from '@ui-kitten/components';
import { TaskContWrapper } from '../styles/global.js';

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

  const HandleTask = ()=>{
    navigation.navigate("Tasks")
  };

  const HandleAddTask = ()=>{
    navigation.navigate("MakeTask")
  };

  const HandleAdd = ()=>{
    console.log('pressed')
  };

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
        <AppText text='Good Afternoon, Sean' style='header'/>
      
        <Wrapper1>
        <Widget onWidget={HandleAdd} 
         width='45%' 
         height='70%'
         style='header2' 
         cl="white"
        style1='header3'
         ></Widget>
         <Widget onWidget={HandleAdd} 
         alignContent="flex-start" 
         justifyContent="flex-start"
         alignItems='flex-start' 
         text='Task Archive'
         text1=''
         c='blue'
         width='40%'
         height='100%'
         style='header3'
        nme='folder'
        dsp='flex'
        top='60%'
        left='10%'
         ></Widget>
        </Wrapper1>
        
        <Wrapper2>
        <Widget onWidget={HandleAdd} 
         width='45%' 
         height='180%' 
         style='header3'
         text='Help & Resource'
         text1=''
         alignContent="flex-end" 
         justifyContent="flex-end"
         alignItems='flex-start' 
         c='blue'
         nme='info'
         dsp='flex'
         left='70%'
         marginTop='-17%'
         ></Widget>
         <Widget onWidget={HandleAdd} 
         width='40%' 
         height='100%' 
         text=''
         text1=''
         nme='bell'
         dsp='flex'
         top='25%'
         left='35%'
         >
        </Widget>
        </Wrapper2>
        </Wrapper>
        <TaskContWrapper>
          <TaskCont/>
        </TaskContWrapper>
        <Wrapper3>
        <AppBttn bttntext='View tasks' style='tiny' onBttn={()=>HandleTask()}/> 
        <AppBttn bttntext='Add tasks' onBttn={()=>HandleAddTask()}/> 
        </Wrapper3>
        
        
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

  const styles = StyleSheet.create({
    icon: {
        width: 70,
        height: 70,
        
    },
  });
  