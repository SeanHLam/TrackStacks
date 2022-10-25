import React, {useState} from 'react';
import styled from 'styled-components/native';
import { Icon } from '@ui-kitten/components';
import { View,Text, StyleSheet} from 'react-native';
import AppText from '../apptext/apptext.js';
import {Wrapper} from '../search/search';
import DropDown from './categorydropdown.js';
import { colours } from './categorydata.js';

import { IndexPath, Layout, Select, SelectItem } from '@ui-kitten/components';


const Wrapper1 = styled.View`
background-color:#fcf9ed;
width:90%;
border:2px solid #363630;
border-radius: 5px;
box-shadow: 4px 4px #363630;
padding:3%;
margin:5%;
`


const SearchCont = styled.View`
color: #363630;
display:flex;
flex-direction:row;
align-items:flex-start;
font-family: Cabin_400Regular;
width:100%;
margin-top:1%;
padding-left:3%;
padding-right:3%;
`

const DropDownWrapper = styled.View`
`

const Layout2 = styled(Layout)`
background-color:#fcf9ed;
width:90%;
border:2px solid #363630;
border-radius: 5px;
box-shadow: 4px 4px #363630;
font-family: DaysOne_400Regular;
font-size: 20px;
`

const SelectItem2 = styled(SelectItem)`
padding:5%;
`

export default function Category({

tlt="Pick a Category",
}){
    const [title, setTitle] = useState("Pick a Category")
    const [toggle, setToggle] = React.useState(false);
    function toggleState(){
        if (toggle === false) {
            setToggle(true)
        }else if(toggle === true){
            setToggle(false)
        } 
    }

    const [selectedCat, setSelectedCat] = React.useState(new IndexPath(0));
    const changeCat = (catname) => {
       setTitle(catname)
    }

    return ( <Wrapper1>
            <SearchCont onPress={toggleState}>
                <AppText text={title} style="body" wdth="90%"/>
                {
                toggle === false &&
                <Icon name="chevron-down"
                fill={"#363630"}
                style={styles.icon}
                onPress={toggleState}
                />
                }

                {
                toggle === true &&
                <Icon name="chevron-up"
                fill={"#363630"}
                style={styles.icon}
                onPress={toggleState}
                />
                }
            </SearchCont>

            
            {toggle === true &&
            <DropDownWrapper>
                {colours.map((o,i)=>
        
                    <DropDown  key={i} typ={colours[i].category} txt={colours[i].category} onSelect={()=>changeCat(colours[i].category)}/>
                )}
            </DropDownWrapper>
            }
        </Wrapper1>
    )
}

const styles = StyleSheet.create({
    icon: {

        width: 35,
        height: 35,
        marginTop:-3
    },

        container: {
            width:"90%",
        },
      
  });

  