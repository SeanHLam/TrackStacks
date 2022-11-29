
import React from 'react';
import {View, Text} from 'react-native';
import Header from '../components/header/header';
import { Icon } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { default as theme } from "../assets/TSTheme.json";
import ResourceWidget from '../components/resourcewidget/resourcewidget';
import { HomeTextCont, ResourceWidgetCont, NavWrapper, SliderCont } from '../styles/global';
import NavMenu from '../components/navmenu/navmenu';
import { StyleSheet } from 'react-native';
import AppText from '../components/apptext/apptext';
import Accordion from '../components/accordion/accordion';
import AccordionBar from '../components/accordion/accordionbar';
import AppBttn from '../components/button/appbutton';
import { ButtonWrapper } from '../styles/global';
import { Wrapper } from '../styles/global';
import { Image } from 'react-native';
export default function PartnerTutorial({navigation, route}){
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
        navigation.navigate("Resources")
      }
      const images = {
        Maketast: require('../assets/TaskPhoto.png'),
        
        } 

      
    return (
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
                <AppText text='Partner Mode' style='header'/>
                <AppText text="1.Tap on the profile icon on the menu. (Fourth)" style='body'/>
                <AppText text="2.Choose Edit profile > Partner information.)" style='body'/>
                <AppText text="3. Your partner will recieve email notifications to verify task completions." style='body'/>
              </HomeTextCont>
              <Wrapper> 
              <Image source={require('../assets/ProfilePhoto.png')}/>
              </Wrapper>
              <ButtonWrapper> 
              <AppBttn onBttn={HandleBack} style='small' bttntext='Back'></AppBttn>
              </ButtonWrapper>
            </SliderCont>
 
        </ApplicationProvider>
    )};