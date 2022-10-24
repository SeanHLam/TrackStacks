
import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Calendar, IconRegistry} from '@ui-kitten/components';
import NavMenu from '../components/navmenu/navmenu.js';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { useState } from 'react';
import { Wrapper, NavWrapper, SliderCont } from '../styles/global.js';
import { Text,Image } from 'react-native';
import AppText from '../components/apptext/apptext.js';
import AppBttn, { SigninButton} from '../components/Button/appbutton.js';
import TaskList from '../components/tasklist/tasklist.js';
import Header from '../components/header/header.js';
import { Widget1 } from '../components/widgets/widget.js';
import { default as theme } from "../assets/TSTheme.json";
import ModalPop from '../components/modal/modal.js';
import AddBttn from '../components/addbutton/addbutton.js';
import Widget from '../components/widgets/widget.js';
import AddDetail from '../components/AddTaskDetail/addtaskdetail.js';

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
  const HandleAdd = ()=>{
    console.log("pressed")
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
         <Widget onWidget={HandleAdd} 
         width="40%" 
         height='70%' 
         style='header' 
         cl="white"
         position='absolute'
         top='90'
         left='-10'
         ></Widget>
         <Widget onWidget={HandleAdd} 
         alignContent="flex-start" 
         justifyContent="flex-start"
         alignItems='flex-start' 
         text='Task Archive'
         text1=''
         c='blue'
         width='35%'
         height='100%'
         style='header2'
         position='absolute'
         top='90'
         left='220'

         ></Widget>
         <Widget onWidget={HandleAdd} 
         width="40%" 
         height='80%' 
         style='header2' 
         text1=''
         text='Help & 
         Resources'
         alignContent="flex-end" 
         justifyContent="flex-end"
         alignItems='flex-start' 
         c='blue'
         position='absolute'
         top='300'
         left='-10'
         ></Widget>
         <Widget onWidget={HandleAdd} 
         width="40%" 
         height='60%' 
         text=''
         text1=''
         position='relative'
         top='290'
         left='115'
         ></Widget>
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