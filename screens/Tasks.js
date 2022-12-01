import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Calendar, IconRegistry} from '@ui-kitten/components';
import NavMenu from '../components/navmenu/navmenu.js';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { useState, useEffect} from 'react';
import { Wrapper, NavWrapper, SliderCont, AddCont } from '../styles/global.js';
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

export default function Tasks({navigation, route}) { 
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
    const [stars, setStars] = useState()
    const [stats, setStats] = useState([])

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
              // console.log(docSnap.data())
              setTasks(docSnap.data().tasks)
              setStars(docSnap.data().stars)
              setStats(docSnap.data().stats)
            } else {
              console.log("No such document!");
            }
        })();
        return ()=>{}
      }, [])
    )

    const HandleAdd = ()=>{
      navigation.navigate("MakeTask")
    };

    const HandleEdit = (i)=>{
      navigation.navigate("EditTask", {
        paramKey: i
      })
    };

    var donearr = []
    

    const [modalVisible, setModalVisible] = useState(false);
    const [isChecked, setChecked] = useState([]);  
    const [index, setIndex] = useState();  

    const HandleDone = (i)=>{
      setModalVisible(true)
      setIndex(i)
      donearr = isChecked
    
      donearr[i] = true
     
      //setChecked(true)
    };


    const HandleFinish = async ()=>{
      const auth = getAuth();
      setModalVisible(false)
      const db = getFirestore();
      const docRef = doc(db, "users", auth.currentUser.uid);
      tasks[index].status = "finished"
      stats.earned += 50
      stats.doing -= 1
      stats.done += 1
      setDoc(
        docRef,
        {
          tasks : tasks,
          stats : stats
        },
        {merge: true}
      )
      updateDoc(docRef, {stars: increment(50)})
     
    }

    const HandleClose = ()=>{
      setModalVisible(false)
      donearr = isChecked
      donearr[index] = false
    }

    const [date, setDate] = React.useState(new Date());
    const [value,setValue]=useState('');
    const changeCat=(e)=>{
        setValue(e)
    }
    
    function Tab({value}){
    if (value.toString() == 'Long Term') {
      value="Long-Term"
    }else if (value.toString() == 'Single') {
      value="Single"
    }else {
      value="To-Do"
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
        <ModalPop onYes={HandleFinish} onClose={HandleClose} onNo={HandleClose}  mdlvis={modalVisible}></ModalPop>
        <SliderCont>
        {/*Confetti && <ConfettiCannon count={50} origin={{x: 0, y:-300}} fallSpeed={3000} fadeOut={true}
            />*/}
          <Wrapper>
            {/* <TaskSearch></TaskSearch> */}
            <Calendar
              date={date}
              onSelect={(nextDate)=> {setDate(nextDate)}}>
            </Calendar>
            <AddCont>
              <AddBttn onAdd={()=>HandleAdd()}></AddBttn>
            </AddCont>
            
            {tasks.map((o,i)=>
            new Date(tasks[i].date.seconds * 1000).toLocaleDateString(undefined, {  weekday: 'short',year: 'numeric',month: 'short',day: 'numeric'}) == date.toLocaleDateString(undefined, {  weekday: 'short',year: 'numeric',month: 'short',day: 'numeric'}) && tasks[i].status == "unfinished" &&
              <TaskList
                  
                tlt={tasks[i].title}
                key={i}
                onDone={()=> HandleDone(i)} 
                onEdit={()=> HandleEdit(i)}
                num={date.toLocaleDateString(undefined, {day:"numeric"})}
                date={date.toLocaleDateString(undefined, {weekday:"short"})}
                typ={tasks[i].cat}
                sub={tasks[i].cat}
                checked={isChecked[i]}
                >
              </TaskList> ) 
              
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