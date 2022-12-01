import { View,Text, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import React, { useState } from 'react';
import AppText from '../apptext/apptext';
import { Icon } from '@ui-kitten/components';
import TaskList from './tasklist';
import {recent, urgent} from './taskdata';
import { getAuth, onAuthStateChanged, auth } from 'firebase/auth';
import { doc, setDoc, getDoc, updateDoc, arrayUnion, arrayRemove, getFirestore, increment } from "firebase/firestore";
import { useFocusEffect } from '@react-navigation/native';
import { async } from '@firebase/util';
import ArchiveList from './archivelist';


const MainCont = styled.View`
width: 100%;
margin-bottom: 4%;

`
 
const HeaderCont = styled.View`
width: 100%;
padding-left:8%;

`

const IconCont = styled.View`
background-color:#FFFDF4;
border-radius: 5px;
box-shadow: 2px 2px #363630;
padding:3px;
display:flex;
justify-content:center;
align-content:center;
`

export default function TaskCont(){
    
    const [list, setList] = useState("recent");
    if (list === "recent"){
        recent.tlt = {urgent}
    } else if (list === "urgent"){
        recent.tlt = {recent}
    }

    const [ tasks, setTasks] = useState([])

    useFocusEffect(
      React.useCallback(() => {
        //setCurrentUser(user.uid);
        (async () => {
            const auth = getAuth();
            const db = getFirestore();
            const docRef =  await doc(db, "users", auth.currentUser.uid);
            //const docRef =  await doc(db, "users", "gmYaKsYiOMiHSj8e099gj0PEvn2");
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
              console.log(docSnap.data())
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
    

    return (
        <MainCont>
            <HeaderCont>
                <AppText 
                align='left'
                style="sub"
                c="black"
                text="Recently Added">
                </AppText>
                
                
            </HeaderCont>
            {tasks.map((o,i)=>
            i >= tasks.length - 3 && tasks[i].status == "unfinished" &&
            // i === 1000 && 
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
            </ArchiveList> )}

      

            
        </MainCont>
    )
}

const styles = StyleSheet.create({
    icon: {
      width: 18,
      height: 18,
    },
  });