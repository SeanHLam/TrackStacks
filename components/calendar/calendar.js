import { View,Text, StyleSheet} from 'react-native';
import React from 'react';
import * as eva from '@eva-design/eva';
import styled from 'styled-components/native';
import AppText from '../apptext/apptext';
import { Calendar } from '@ui-kitten/components';



const Cont = styled.View`
background-color: #FEFDF4;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
`;

export default function TaskCalendar({
    onDate=()=>{},
  
}){
      const [date, setDate] = React.useState(new Date());

    return(
        <Cont>
            <Calendar
                date={date}
                onSelect={
                    nextDate => {
                        setDate(nextDate), 
                        console.log(date.toLocaleDateString()
                        ) 
                    }}
                    >
            </Calendar>
        </Cont>
    )
}


