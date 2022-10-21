import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider,Calendar, IconRegistry} from '@ui-kitten/components';
import NavMenu from '../components/navmenu/navmenu.js';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { useState } from 'react';
import { Wrapper, NavWrapper, SliderCont } from '../styles/global.js';
import Header from '../components/header/header.js';
import { default as theme } from "../assets/TSTheme.json";
import TaskList from '../components/tasklist/tasklist.js';

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
    }

    const temp = [
      {
        title:"Do Chores",
        date:"Thu, Oct 20, 2022",
        cat:"todo",
      },
      {
        title:"Make more eye contact",
        date:"Fri, Oct 21, 2022",
        cat:"longterm",
      },
      {
        title:"Do AP History hw",
        date:"Fri, Oct 28, 2022",
        cat:"single",
      },
      {
        title:"Cook dinner",
        date:"Fri, Oct 21, 2022",
        cat:"single",
      },
    ]
    const [date, setDate] = React.useState(new Date());
    //const [newDate, setNewDate] = useState(date)
    const HandleDate = ()=> {
      const newdate = datedate.toLocaleDateString(undefined, {  weekday: 'short',year: 'numeric',month: 'short',day: 'numeric',})
      setTasks(newdate)
    }

    console.log(date.toLocaleDateString(undefined, {  weekday: 'short',year: 'numeric',month: 'short',day: 'numeric',}))
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
          
          
            <Calendar
              date={date}
              onSelect={
              nextDate => {
                setDate(nextDate)
    
                
              }}>
            </Calendar>
            
            {temp.map((o,i)=>
            temp[i].date == date.toLocaleDateString(undefined, {  weekday: 'short',year: 'numeric',month: 'short',day: 'numeric',}) &&
                <TaskList tlt={temp[i].title}
                num={date.toLocaleDateString(undefined, {day:"numeric"})}
                date={date.toLocaleDateString(undefined, {weekday:"short"})}
                typ={temp[i].cat}>
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

    // console.log(date.toLocaleDateString(undefined, {weekday:"short"})) 