import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import NavMenu from '../components/navmenu/navmenu.js';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { useState } from 'react';
import { Wrapper, NavWrapper, SliderCont, HeaderCont } from '../styles/global.js';
import Header from '../components/header/header.js';
import { default as theme } from "../assets/TSTheme.json";
import Category from '../components/categorymenu/categorymenu.js';
import AppText from '../components/apptext/apptext.js';
import AppBttn from '../components/Button/appbutton.js';
import TaskTitle from '../components/form/tasktitle.js';
import AddDetail from '../components/AddTaskDetail/addtaskdetail.js';

export default function MakeTask({navigation, route}) { 
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
    const HandleBack = ()=>{
      navigation.navigate("Tasks")
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
        <Header/>
        <SliderCont>
          <Wrapper>
            <HeaderCont>
              <AppText style='header' text='Add Task'></AppText>
              <AppBttn style='small' bttntext='Cancel'></AppBttn>
            </HeaderCont>
            <TaskTitle></TaskTitle>
            <Category></Category>
            <AddDetail></AddDetail>
            <AppBttn onBttn={HandleBack} style='small' bttntext='Back'></AppBttn>
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