import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import NavMenu from '../components/navmenu/navmenu.js';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { useState } from 'react';
import { Wrapper, NavWrapper, SliderCont, DecorCont, DecorImage, AssetCont} from '../styles/global.js';
import Header from '../components/header/header.js';
import { default as theme } from "../assets/TSTheme.json";
import { Image} from 'react-native';
import DecWidget from '../components/decorwidget/decorwidget.js';
import IconBttn from '../components/iconbttn/iconbttn.js';
import AssetSlider from '../components/assetslider/assetslider.js';
import AppBttn from '../components/button/appbutton';
import Lavender2 from '../assets/lavender.svg'

export default function Decor({navigation, route}) { 
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

    const [background, setBackground] = useState(false);
    const handleBg = () => {
      if (background == false){
        setBackground(true)
      } else if (background == true){
        setBackground(false)
      }
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
            <DecorCont>
              <AppBttn bttntext='Shop' style='small' nme='shopping-cart' dsp='flex'></AppBttn>
              <AppBttn bttntext='Items' style='small' nme='briefcase' dsp='flex'></AppBttn>
              <IconBttn i={"question-mark-circle"}></IconBttn>
            </DecorCont>

            {/* <SvgCssUri uri="../assets/lavender.svg" width="100" height="100" /> */}
            <DecorImage source={background ? require("../assets/rewardBgWarm.png") : require("../assets/rewardBgCool.png")}/>
            
            <AssetCont>
              <AssetSlider/>
              <IconBttn i={background ? 'moon' : 'moon-outline'} width='70' height='60' onIcon={handleBg}></IconBttn>
            </AssetCont>

            
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
