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

export default function Resources({navigation, route}){
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
      const HandleTutorial = ()=>{
        navigation.navigate("TaskTutorial")
      }
      const images = {
        task: require('../assets/CreateTask.png'),
        parental: require('../assets/ParentalMode.png'),
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
                <AppText text='Tutorials' style='header'/>
              </HomeTextCont>

              <ResourceWidgetCont>
                  <ResourceWidget onWidget={()=>navigation.navigate("TaskTutorial")} 
                  secondtext='/ Create a Task'
                  dsp='none'
                  source={images.task}
                  ></ResourceWidget>
                  <ResourceWidget
                  onWidget={()=>navigation.navigate("PartnerTutorial")}
                  secondtext='/ Partner Mode'
                  dsp='none'
                  source={images.parental}
                  ></ResourceWidget>
              </ResourceWidgetCont>

              <HomeTextCont>
                <AppText text='FAQ' style='header'/>
              </HomeTextCont>

              <Accordion></Accordion>

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