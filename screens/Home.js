
import React from 'react';
import {SafeAreaView, ScrollView,} from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, IconRegistry} from '@ui-kitten/components';
import NavMenu from '../components/navmenu/navmenu.js';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { Cont } from '../components/navmenu/navmenu.js';
import { useState } from 'react';
import { Wrapper, NavWrapper } from '../styles/global.js';
import { Text, } from 'react-native';
import AppText from '../components/apptext/apptext.js';

export default function Home({navigation}) { 
  const [pages, setPage] = useState(1)
  const HandlePage = (new_page) =>{
    setPage(new_page);
    if(pages === 1){
     navigation.navigate("Home")
    }else if(pages === 2){
     navigation.navigate("Tasks")
    }
  }

  return(
<ApplicationProvider style={{display: "flex", justifyContent: 'center', alignItems: 'center'}} {...eva} theme={eva.light}>
  
    <IconRegistry icons={EvaIconsPack} />
   <SafeAreaView>
     <ScrollView>
      <Wrapper>
        <AppText c="black" style="header" text="This is a header"></AppText>
        <AppText c="black" style="header" text="This is a header"></AppText>
        <AppText c="black" style="header" text="This is a header"></AppText>
        <AppText c="black" style="header" text="This is a header"></AppText>
        <AppText c="black" style="header" text="This is a header"></AppText>
        <AppText c="black" style="header" text="This is a header"></AppText>
        <AppText c="black" style="header" text="This is a header"></AppText>
        <AppText c="black" style="header" text="This is a header"></AppText>
        <AppText c="black" style="header" text="This is a header"></AppText>
        <AppText c="black" style="header" text="This is a header"></AppText>
        <AppText c="black" style="header" text="This is a header"></AppText>
        <AppText c="black" style="header" text="This is a header"></AppText>
        <AppText c="black" style="header" text="This is a header"></AppText>
        <AppText c="black" style="header" text="This is a header"></AppText>
      </Wrapper>
    </ScrollView>
  </SafeAreaView>
    <NavWrapper>
      <NavMenu
      activemenu={pages}
      onHome={()=>HandlePage(1)}
      onTask={()=>HandlePage(2)}
      onDecor={()=>HandlePage(3)}
      onUser={()=>HandlePage(4)}
      ></NavMenu>
    </NavWrapper>
      
</ApplicationProvider>

  )};