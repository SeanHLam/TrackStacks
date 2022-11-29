import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import NavMenu from '../components/navmenu/navmenu.js';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { useState } from 'react';
import { Wrapper, NavWrapper, SliderCont, HeaderCont, PickDate, PickDateRange, SelectCont, MascotCont} from '../styles/global.js';
import Header from '../components/header/header.js';
import { default as theme } from "../assets/TSTheme.json";
import Category from '../components/categorymenu/categorymenu.js';
import SubTask from '../components/addtask/subtask.js';
import RepeatMenu from '../components/repeatmenu/repeatmenu.js';
import AppText from '../components/apptext/apptext.js';
import AppBttn from '../components/button/appbutton.js';
import TaskTitle from '../components/form/tasktitle.js';
import AddDetail from '../components/addtask/addtaskdetail.js';
import { useFonts, Cabin_400Regular, Cabin_700Bold  } from '@expo-google-fonts/cabin';
import { DaysOne_400Regular } from '@expo-google-fonts/days-one';
import { Datepicker, Layout, Text,  RangeDatepicker, Select, SelectItem,  IndexPath } from '@ui-kitten/components';
import { colours } from '../components/categorymenu/categorydata.js';
import { getAuth, onAuthStateChanged, auth } from 'firebase/auth';
import { doc, setDoc, getDoc, updateDoc, arrayUnion, arrayRemove, getFirestore, increment } from "firebase/firestore";
import { useFocusEffect } from '@react-navigation/native';
import { View} from 'react-native';
import Mascot from '../assets/mascot.svg'
import styled from 'styled-components';
import AddBttn from '../components/addbutton/addbutton.js';

const strictTheme = { ["Cabin_700Bold"]: 'Times New Roman' }; 
const customMapping = { strict: strictTheme };

export const WidgetCont = styled.View`
background-color:#FEFDF4;
width:90%;
border:2px solid #363630;
border-radius: 5px;
box-shadow: 4px 4px #363630;
padding:3%;
margin: 0% 0% 5% 0%;
`

export const AddCont = styled.View`
display:flex;
flex-direction:row;
align-items:center;
`


const data = [
  'Single',
  'To Do',
  'Long Term',
];


export default function EditTask({navigation, route}) {
  const taskKey = route.params.paramKey
  const [tasks, setTasks] = useState([])
  const [date, setDate] = React.useState(new Date());
  const [range, setRange] = React.useState({});
  const  [text, onChangeText] = React.useState("");
  const [sub, onSub] = React.useState('');
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0))
  const [index, setIndex] = useState(0)
  const [subTask, setSubTask] = useState([{
    taskname:'',
    status:false
  }])
 
  
  const [title, setTitle] = useState("Pick a Category")
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
      navigation.navigate("Tasks")
    }
    
    const HandleTitle = (t)=>{
      onChangeText(t)
    }
    

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
              let allTasks = docSnap.data().tasks
              let taskDate = allTasks[taskKey].date
              setTasks(docSnap.data().tasks)
              console.log("here",allTasks[10].cat)
              onChangeText(allTasks[taskKey].title)
              setDate(taskDate.toDate())
              setSubTask(allTasks[taskKey].sub)

              if(allTasks[taskKey].cat === "Single"){
                setSelectedIndex(new IndexPath(0))
              }else if(allTasks[taskKey].cat === "To Do"){
                setSelectedIndex(new IndexPath(1))
              }else if(allTasks[taskKey].cat === "Long Term"){
                setSelectedIndex(new IndexPath(2))
              }

              
              
              
           
            } else {
              console.log("No such document!");
            }
        })();
        return ()=>{}
      }, [])
    )
 

    const HandleSub = (e, i) =>{
      let newArr = [...subTask];
      newArr[i].taskname = e
      setSubTask(newArr)
      console.log(e)
    }

    const [checked, onCheckMark] = useState()
    

    const handleCheck = (i)=>{
      let newArr = [...subTask];
      
      if(newArr[i].status === true){
        newArr[i].status = false
      }else if(newArr[i].status === false){
        newArr[i].status = true
      }

      setSubTask(newArr)
      
    }
    console.log(subTask)
    const HandleAdd = ()=>{
      const auth = getAuth();
      const db = getFirestore();
      const docRef = doc(db, "users", auth.currentUser.uid);
      tasks[taskKey].title = text
      tasks[taskKey].date = date
      tasks[taskKey].sub = subTask
        setDoc(
            docRef,
            {
             tasks:tasks                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
              
            },
            {merge: true}
          )
      navigation.navigate("Tasks")
    }

    const HandleCat = (e)=>{
     setTitle(e)
     console.log(e)
    } 
 
    const renderOption = (title) => (
      <SelectItem title={title}/>
    );

    const handleAddSub = () => {
      setSubTask([
        ...subTask,
        {
          taskname:"",
          status:"unfinished"
        }
      ])
      setIndex(index + 1)
    }


    return(
      <ApplicationProvider 
      customMapping={customMapping}
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
            <HeaderCont>
              <AppText style='header' wdth='65%' text='Edit Task'></AppText>
              <AppBttn onBttn={HandleBack} style='small' bttntext='Cancel'></AppBttn>
            </HeaderCont>
            <TaskTitle addTitle={HandleTitle} t={text}></TaskTitle>
            {/* <Category onCat={HandleCat}></Category> */}
           

            {/* { data[selectedIndex.row] === "To Do" &&
                    <AddDetail
              
                    changeText={HandleSub}
                    mark={checked}
                    onMark={onCheckMark}
                    addTask={()=>handleAddSub()}
                    subTasks={tasks[taskKey].sub}
                  >
                  </AddDetail>
            } */}
            {data[selectedIndex.row] === "To Do" &&
            <WidgetCont>
              <AppText style='sub' text='Details'></AppText>
            {subTask.map((o,i)=> (
                <SubTask
                t={subTask[i].taskname}
                onText={e =>HandleSub(e,i)}
                onCheck={()=>handleCheck(i)}
                check={subTask[i].status}
                key={i}/>)
              )}
              {/* <AddCont>
                <AddBttn></AddBttn>
                <AppText style='body' text='Add New'></AppText>
              </AddCont> */}
              

            </WidgetCont>}
            
   
            {/* {subTask.map((o,i)=> (
            <SubTask
            onText={HandleSub}
            t={subTask[i].taskname}
            key={i}/>)
          )} */}
          
            { data[selectedIndex.row] === "Single" && 
                <PickDate
                date={date}
                onSelect={nextDate => setDate(nextDate)}
              ></PickDate>
            }

            {data[selectedIndex.row] === "To Do" && 
                <PickDate
                date={date}
                onSelect={nextDate => setDate(nextDate)}
              ></PickDate>
            }
            
            { data[selectedIndex.row] === "Long Term" &&
                    <PickDate
                    date={date}
                    onSelect={nextDate => setDate(nextDate)}
                  ></PickDate>
            }
            
             
             {/* <RepeatMenu></RepeatMenu> */}
            <AppBttn marginBottom='5%' onBttn={HandleAdd} style='large' bttntext='Edit Task'></AppBttn>
         
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