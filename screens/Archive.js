import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider,Calendar, IconRegistry} from '@ui-kitten/components';
import NavMenu from '../components/navmenu/navmenu.js';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { useState } from 'react';
import { Wrapper, NavWrapper, SliderCont, AddCont, HomeTextCont} from '../styles/global.js';
import Header from '../components/header/header.js';
import { default as theme } from "../assets/TSTheme.json";
import TaskList from '../components/tasklist/tasklist.js';
import TaskSearch from '../components/search/search.js';
import Category from '../components/categorymenu/categorymenu.js';
import AddBttn from '../components/addbutton/addbutton.js';
import ModalPop from '../components/modal/modal.js';
import { getAuth, onAuthStateChanged, auth } from 'firebase/auth';
import { doc, setDoc, getDoc, updateDoc, arrayUnion, arrayRemove, getFirestore, increment } from "firebase/firestore";
import { useFocusEffect } from '@react-navigation/native';
import { async } from '@firebase/util';
import ArchiveList from '../components/tasklist/archivelist.js';
import AppText from '../components/apptext/apptext.js';

export default function Archive({navigation, route}) { 
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
    };

    const [tasks, setTasks] = useState([])

    useFocusEffect(
      React.useCallback(() => {
        //setCurrentUser(user.uid);
        (async () => {
            const auth = getAuth();
            const db = getFirestore();
            const docRef =  await doc(db, "users", auth.currentUser.uid);
            //const docRef =  await doc(db, "users", "gmYamKsYiOMiHSj8e099gj0PEvn2");
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
              
              setTasks(docSnap.data().tasks)
       
            } else {
              console.log("No such document!");
            }
        })();
        return ()=>{}
      }, [])
    )


    const [date, setDate] = React.useState(new Date());
    const [value,setValue]=useState('');
    const changeCat=(e)=>{
        setValue(e)
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
            <HomeTextCont style={{marginLeft:'15%', marginBottom:'3%'}}>
            <AppText style='title'  text='Archive'></AppText>
            </HomeTextCont>
            {tasks.map((o,i)=>
            tasks[i].status == "finished" &&
              <ArchiveList
                month={new Date(tasks[i].date.seconds * 1000).toLocaleDateString(undefined, {month:"short"}).toUpperCase()}
                tlt={tasks[i].title}
                key={i}
                onDone={()=> HandleDone(i)} 
                onEdit={()=> HandleEdit()}
                num={new Date(tasks[i].date.seconds * 1000).toLocaleDateString(undefined, {day:"numeric"})}
                date={new Date(tasks[i].date.seconds * 1000).toLocaleDateString(undefined, {weekday:"short"})}
                typ={tasks[i].cat}
                sub={tasks[i].cat}
                
                >
              </ArchiveList> ) 
            }
         
            
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