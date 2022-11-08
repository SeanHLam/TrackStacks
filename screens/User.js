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
import SetToggle from '../components/settingswidget/settingstoggle.js';
import Statistics from '../components/statistics/statistics.js';
import UserWidget from '../components/userwidget/userwidget.js';

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
    
    const HandleSet = () =>{
      console.log("pressed")
    }

    const [checked, setChecked] = React.useState(true);
    const onCheckedChange = (isChecked) => {
        setChecked(isChecked);
        
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
        <Header/>
        <SliderCont>
          <Wrapper>
            <UserWidget></UserWidget>
            <AppText text='Statistics' style='header'></AppText>
            <Statistics></Statistics>
            <AppText text='Settings' style='header'></AppText>
            <SetWidget onSet={()=>HandleSet()}></SetWidget>
            <SetToggle></SetToggle>
            <SetToggle onToggle={()=>HandleSet()} i="volume-up-outline" t="Sound"></SetToggle>
            <SetToggle i="color-palette-outline" t="High Contrast Mode"></SetToggle>
            <SetToggle i="message-square-outline" t="Motivational Memo"></SetToggle>
            <SetWidget i="question-mark-circle-outline" t="Help & Resources" onSet={()=>HandleSet()}></SetWidget>
            <SetWidget i="archive-outline" t="Task Archive" onSet={()=>HandleSet()}></SetWidget>
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