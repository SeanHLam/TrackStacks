import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import NavMenu from '../components/navmenu/navmenu.js';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { useState } from 'react';
import { Wrapper, NavWrapper, SliderCont, HeaderCont, PickDate } from '../styles/global.js';
import Header from '../components/header/header.js';
import { default as theme } from "../assets/TSTheme.json";
import Category from '../components/categorymenu/categorymenu.js';
import RepeatMenu from '../components/repeatmenu/repeatmenu.js';
import AppText from '../components/apptext/apptext.js';
import { Datepicker, Layout, Text } from '@ui-kitten/components';
import { colours } from '../components/categorymenu/categorydata.js';

export default function EditTask({navigation, route}) { 
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
    const [date, setDate] = React.useState(new Date());
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
              <AppText style='header' wdth='65%' text='Edit Task'></AppText>
              <AppBttn onBttn={HandleBack} style='small' bttntext='Cancel'></AppBttn>
            </HeaderCont>
            <TaskTitle></TaskTitle>
            <Category></Category>
           
            <AddDetail></AddDetail>
            <PickDate
              date={date}
              onSelect={nextDate => setDate(nextDate)}
            ></PickDate>
             <RepeatMenu></RepeatMenu>
            <AppBttn onBttn={HandleBack} style='small' bttntext='Add'></AppBttn>
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