import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import NavMenu from '../components/navmenu/navmenu.js';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { useState } from 'react';
import { Wrapper, NavWrapper, SliderCont, HeaderCont, PickDate, PickDateRange, SelectCont} from '../styles/global.js';
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
import { doc, updateDoc, arrayUnion, arrayRemove, getFirestore} from "firebase/firestore";

const strictTheme = { ["Cabin_700Bold"]: 'Times New Roman' }; 
const customMapping = { strict: strictTheme };

const data = [
  'Single',
  'To Do',
  'Long Term',
];


export default function MakeTask({navigation, route}) {
  const [date, setDate] = React.useState(new Date());
  const [range, setRange] = React.useState({});
  const [text, onChangeText] = React.useState('');
  const [sub, onSub] = React.useState('');
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0))
  const [subTask, setSubTask] = useState([{
    taskname:'',
    status:"unfinished"
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
    
    const HandleSub = (t)=>{
      subTask.taskname = t
      onSub(t)
      console.log(subTask, i)

    }

    const HandleAdd = ()=>{
      const db = getFirestore();
      const docRef = doc(db, "users", "gmYamKsYiOMiHSj8e099gj0PEvn2");
      if(data[selectedIndex.row] === "Long Term"){
        let loop = new Date(range.startDate);
        while (loop <= range.endDate) {
          let newDate = loop.setDate(loop.getDate() + 1);
          updateDoc(docRef, {
            tasks: arrayUnion({
              title: text,
              date: loop,
              cat: data[selectedIndex.row],
              status: "unfinished"
            })
          });
          loop = new Date(newDate);
        }
      }else if(data[selectedIndex.row] === "Single"){
        updateDoc(docRef, {
          tasks: arrayUnion({
            title: text,
            date: date,
            cat: data[selectedIndex.row],
            status: "unfinished"
          })
        });
      }else if(data[selectedIndex.row] === "To Do"){
        updateDoc(docRef, {
          tasks: arrayUnion({
            title: text,
            date: date,
            cat: data[selectedIndex.row],
            status: "unfinished"
          })
        });
      }
  

    }

    const HandleCat = (e)=>{
     setTitle(e)
     console.log(e)
    }
   
    //console.log(date.toLocaleDateString(undefined, {day:"numeric"}), date, range)
    
 
    const renderOption = (title) => (
      <SelectItem title={title}/>
    );
    console.log(subTask)
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
              <AppText style='header' wdth='65%' text='Add Task'></AppText>
              <AppBttn onBttn={HandleBack} style='small' bttntext='Cancel'></AppBttn>
            </HeaderCont>
            <TaskTitle addTitle={HandleTitle} t={text}></TaskTitle>
            {/* <Category onCat={HandleCat}></Category> */}
            <SelectCont>
              <Select
              style={{marginTop:0,}}
              selectedIndex={selectedIndex}
              value={data[selectedIndex.row]}
              onSelect={index => setSelectedIndex(index)}> 
                 {data.map(renderOption)}
              </Select>
            </SelectCont> 
            <AddDetail
              detail={sub}
              changeText={HandleSub}
              subText={sub}
              addTask={()=>setSubTask([
                ...subTask,
                {
                  taskname:"",
                  status:"unfinished"
                }
              ])}
              subTasks={subTask}
            >
              
            </AddDetail>
            
            <PickDate
              date={date}
              onSelect={nextDate => setDate(nextDate)}
            ></PickDate>
            
            <PickDateRange
            range={range}
            onSelect={nextRange => setRange(nextRange)}
            />
             
             <RepeatMenu></RepeatMenu>
            <AppBttn onBttn={HandleAdd} style='small' bttntext='Add'></AppBttn>
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