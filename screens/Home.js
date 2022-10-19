
import React from 'react';
import {SafeAreaView, ScrollView,} from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, IconRegistry} from '@ui-kitten/components';
import NavMenu from '../components/navmenu/navmenu.js';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { Cont } from '../components/navmenu/navmenu.js';
import { useState } from 'react';
import { Wrapper, NavWrapper, SliderCont } from '../styles/global.js';
import { Text, } from 'react-native';
import AppText from '../components/apptext/apptext.js';

export default function Home({navigation, route}) { 
  const [pages, setPage] = useState(1)
  const HandlePage = (new_page) =>{
    if(new_page === 1){
     navigation.navigate("Home")
    }else if(new_page === 2){
     navigation.navigate("Tasks")
    }
  }
  console.log(route)
  return(

  
    <ApplicationProvider style={{display: "flex", justifyContent: 'center', alignItems: 'center'}} {...eva} theme={eva.light}>
      <IconRegistry icons={EvaIconsPack} />
      <SliderCont>
        <Wrapper>
          <AppText c="black" style="header" text="This is a header"></AppText>
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