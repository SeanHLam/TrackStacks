import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider,Calendar, IconRegistry} from '@ui-kitten/components';
import NavMenu from '../components/navmenu/navmenu.js';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { useState } from 'react';
import { Wrapper, NavWrapper, SliderCont, AddCont } from '../styles/global.js';
import Header from '../components/header/header.js';
import { default as theme } from "../assets/TSTheme.json";
import TaskList from '../components/tasklist/tasklist.js';
import { tasks } from '../data/taskdata.js';
import TaskSearch from '../components/search/search.js';
import Category from '../components/categorymenu/categorymenu.js';
import AddBttn from '../components/addbutton/addbutton.js';
import AppBttn from '../components/button/appbutton.js';
import ModalPop from '../components/modal/modal.js';


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
    const HandleAdd = ()=>{
      navigation.navigate("MakeTask")
    };
    const [modalVisible, setModalVisible] = useState(false);
    const HandleDone = ()=>{
      setModalVisible(true)
    };
    const HandleClose = ()=>{
      setModalVisible(false)
    }

    const [date, setDate] = React.useState(new Date());
    const [value,setValue]=useState('');
    const changeCat=(e)=>{
        setValue(e)
    }
    
    function Tab({value}){
    if (value.toString() == 'Long-Term') {
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
        <ModalPop onYes={HandleClose} onClose={HandleClose} onNo={HandleClose}  mdlvis={modalVisible}></ModalPop>
        <SliderCont>
          <Wrapper>
            <TaskSearch></TaskSearch>
            
            <Calendar
              date={date}
              onSelect={(nextDate)=> {setDate(nextDate)}}>
            </Calendar>
            <AddCont>
              <AddBttn onAdd={()=>HandleAdd}></AddBttn>
            </AddCont>
            
            {tasks.map((o,i)=>
            tasks[i].date == date.toLocaleDateString
            (undefined, 
            {  weekday: 'short',year: 'numeric',month: 'short',day: 'numeric'}) &&
              <TaskList
                tlt={tasks[i].title}
                key={i}
                onDone={()=> HandleDone()} 
                num={date.toLocaleDateString(undefined, {day:"numeric"})}
                date={date.toLocaleDateString(undefined, {weekday:"short"})}
                typ={tasks[i].cat}
                sub={tasks[i].cat}
                >
              </TaskList> ) 
            }
          <AppBttn onBttn={HandleDone} bttntext='show modal'/>
         
            
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