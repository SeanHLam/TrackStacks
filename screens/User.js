import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import NavMenu from '../components/navmenu/navmenu.js';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { useState, useEffect } from 'react';
import { Wrapper, NavWrapper, SliderCont } from '../styles/global.js';
import Header from '../components/header/header.js';
import { default as theme } from "../assets/TSTheme.json";
import AppText from '../components/apptext/apptext.js';
import SetWidget from '../components/settingswidget/settingswidget.js';
import SetToggle from '../components/settingswidget/settingstoggle.js';
import Statistics from '../components/statistics/statistics.js';
import UserWidget from '../components/userwidget/userwidget.js';
import { getAuth, onAuthStateChanged, auth } from 'firebase/auth';
import { doc, setDoc, getDoc, updateDoc, arrayUnion, arrayRemove, getFirestore, increment } from "firebase/firestore";
import { useFocusEffect } from '@react-navigation/native';
import AppBttn from '../components/button/appbutton.js';
import { async } from '@firebase/util';

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

  const [currentUser, setCurrentUser] = useState()
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [tDone, setTDone] = useState()
  const [tDoing, setTDoing] = useState()
  const [tSpent, setTSpent] = useState()
  const [earned, setEarned] = useState()

  useFocusEffect(
    React.useCallback(() => {
      //setCurrentUser(user.uid);
      (async () => {

        const auth = getAuth();
        const db = getFirestore();
         // const docRef =  await doc(db, "users", auth.currentUser.uid);
          const docRef =  await doc(db, "users", "gmYamKsYiOMiHSj8e099gj0PEvn2");
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            
            setName(docSnap.data().displayName)
            setEmail(docSnap.data().email)
            setTDone(docSnap.data().stats.done)
            setTDoing(docSnap.data().stats.doing)
            setTSpent(docSnap.data().stats.spent)
            setEarned(docSnap.data().stats.earned)
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
      })();
      return ()=>{}
    }, [])
  )

    
    const HandleSet = () =>{
      console.log("pressed")
    }
    const HandleHelp = () =>{
      navigation.navigate("Resources")
    }
    const HandleLogout = async (e) =>{
      e.preventDefault();
      await signOut(auth);
      console.log("User is logged out");
      if(signOut === true){
        navigation.navigate("SignIn")
      }
    }

    const HandleArchive = () =>{
      navigation.navigate("Archive")
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
            <UserWidget name={name} email={email}></UserWidget>
            <AppBttn onBttn={()=>HandleLogOut()} bttntext='Logout' style='small' margin='0%' marginTop='-15%' marginBottom='10%' marginLeft='15%'/>
            <AppText text='Statistics' style='header'></AppText>
            <Statistics 
            doing={tDoing}
            spent={tSpent}
            done={tDone}
            earned={earned}
            
            
            ></Statistics>
            <AppText text='Settings' style='header'></AppText>
            
            <SetToggle></SetToggle>
            <SetToggle onToggle={()=>HandleSet()} i="volume-up-outline" t="Sound"></SetToggle>
            
            
            <SetWidget i="question-mark-circle-outline" t="Help & Resources" onSet={()=>HandleHelp()}></SetWidget>
            <SetWidget i="archive-outline" t="Task Archive" onSet={()=>HandleArchive()}></SetWidget>
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