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
import {HomeTextCont, WidgetWrapper, WidgetWrapper2, WidgetWrapper3, Wrapper3} from '../styles/global.js';
import TaskCont from '../components/tasklist/container.js';
import { Icon } from '@ui-kitten/components';
import { TaskContWrapper } from '../styles/global.js';
import { ScreenCont } from '../styles/global.js';

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
  
        <HomeTextCont>
          <AppText text='Good Afternoon, Sean' style='header'/>
        </HomeTextCont>
        <WidgetWrapper>
        <WidgetWrapper2>

        <Widget onWidget={HandleAdd}  
        width='90%'
        height='35%'
        style='header2' 
        cl='white'
        style1='header3'
        dsp='none'
        />

        <Widget onWidget={HandleAdd} 
         width='90%'
         height='35%'
         style='header3'
         text='Help & Resources'
         justifyContent='flex-end'
         alignItems='flex-start'
         text1=''
         c='blue'
         nme='info'
         top='-100%'
         left='60%'
         marginTop='5%'
        />
         

        </WidgetWrapper2>
        
        <WidgetWrapper3>

        <Widget onWidget={HandleAdd} 
         width='90%'
         height='25%'
         alignItems='flex-start'
         justifyContent='flex-start'
         text='Task Archive'
         text1=''
         c='blue'
         style='header3'
         nme='archive'
         pos='absolute'
         left='-5%'
         top='10%'
         />

         <Widget onWidget={HandleAdd} 
         width='90%' 
         height='10%'
         text=''
         text1=''
         nme='bell'
         pos='static'
         justifyContent='flex-end'
         left='25%'
         marginTop='5%'
         />
        </WidgetWrapper3>

        </WidgetWrapper>
        

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
  