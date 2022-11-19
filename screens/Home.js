import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Calendar, IconRegistry} from '@ui-kitten/components';
import NavMenu from '../components/navmenu/navmenu.js';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { useState, useEffect } from 'react';
import { Wrapper, NavWrapper, SliderCont } from '../styles/global.js';
import { Text,Image, StyleSheet } from 'react-native';
import AppText from '../components/apptext/apptext.js';
import TaskList from '../components/tasklist/tasklist.js';
import Header from '../components/header/header.js';
import { Widget1 } from '../components/widgets/widget.js';
import { default as theme } from "../assets/TSTheme.json";
import ModalPop from '../components/modal/modal.js';
import AddBttn from '../components/addbutton/addbutton.js';
import Widget from '../components/widgets/widget.js';
import {HomeTextCont, WidgetWrapper, ColumnOneWrapper, ColumnTwoWrapper, ButtonWrapper} from '../styles/global.js';
import TaskCont from '../components/tasklist/container.js';
import { Icon } from '@ui-kitten/components';
import { TaskContWrapper } from '../styles/global.js';
import { ScreenCont } from '../styles/global.js';
import AppBttn from '../components/button/appbutton.js';
import { getAuth, onAuthStateChanged, auth } from 'firebase/auth';
import { doc, getDoc, getFirestore } from "firebase/firestore";

export default function Home({navigation, route}) { 
  const [currentUser, setCurrentUser] = useState()
  const [name, setName] = useState()

  // useEffect(()=>{
  //   // get current notes from backend
  //   auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       // User logged in already or has just logged in.
  //       setCurrentUser(user.uid)
  //       console.log(user.uid);
  //     } else {
  //       // User not logged in or has just logged out.
  //     }
  //   });
  //   });

  //   (async () => {
  //     const docRef =  await doc(db, "users", currentUser);
  //     const docSnap = await getDoc(docRef);
  //     if (docSnap.exists()) {
  //         console.log("Document data:", docSnap.data().displayName);
  //       setName(docSnap.data().displayName)
  //     } else {
  //       // doc.data() will be undefined in this case
  //       console.log("No such document!");
  //     }
  // })()

  useEffect(()=>{
    const auth = getAuth();
    onAuthStateChanged(auth, (user)=>{
      if (user) {
        setCurrentUser(user.uid);
        (async () => {
          const db = getFirestore();
            const docRef =  await doc(db, "users", currentUser);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
            setName(docSnap.data().displayName)
             console.log(docSnap.data())
            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
            }
        })()
      }
    })
  },[])


    

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

  const HandleResources = ()=>{
    navigation.navigate("Resources");
  };


  const HandleAdd = ()=>{
    fetch(`https://77e3-142-232-219-87.ngrok.io/add-tasks?task=1`)
    .then(async (res)=>console.log(await res.json()))
   
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
  
        <HomeTextCont>
          <AppText text={`Good Afternoon, ${name}`} style='header'/>
        </HomeTextCont>

        <WidgetWrapper>

        <ColumnOneWrapper>

        <Widget
        width='85%'
        height='45%'
        style='header2' 
        cl='white'
        style1='header3'
        dsp='none'
        />

        <Widget onWidget={HandleResources} 
         width='85%'
         height='50%'
         style='header3'
         text='Help & Sources'
         justifyContent='flex-end'
         alignItems='flex-start'
         text1=''
         c='blue'
         nme='info'
         top='-100%'
         left='60%'
         marginTop='5%'
        />
         

        </ColumnOneWrapper>
        
        <ColumnTwoWrapper>

        <Widget 
         width='85%'
         height='70%'
         alignItems='flex-start'
         justifyContent='flex-start'
         text='Task Archive'
         text1=''
         c='blue'
         style='header3'
         nme='archive'
         pos='absolute'
         left='-5%'
         />

         <Widget
         width='85%' 
         height='25%'
         text=''
         text1=''
         nme='bell'
         pos='static'
         justifyContent='flex-end'
         top='-5%'
         left='25%'
         marginTop='5%'
         />
        </ColumnTwoWrapper>

        </WidgetWrapper>
        

        <TaskContWrapper>
          <TaskCont/>
        </TaskContWrapper>
        <ButtonWrapper>
        <AppBttn bttntext='View tasks' style='large' onBttn={()=>HandleTask()}/> 
        <AppBttn bttntext='Add tasks' onBttn={()=>HandleAddTask()}/> 
        </ButtonWrapper>
        
        
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
  