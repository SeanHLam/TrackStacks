import React, {useState} from 'react';
import styled from 'styled-components/native';
import { Icon } from '@ui-kitten/components';
import { TouchableOpacity, LayoutAnimation, View,Text, StyleSheet} from 'react-native';
import AppText from '../apptext/apptext.js';
import RepeatDropDown from './repeatdropdown';
import { repeatdata } from './repeatdata.js';


const Wrapper = styled.View`
background-color:#fcf9ed;
width:90%;
border:2px solid #363630;
border-radius: 5px;
box-shadow: 4px 4px #363630;
padding:3%;
margin:5%;
`


const RepeatCont = styled(TouchableOpacity)`
color: #363630;
display:flex;
flex-direction:row;
align-items:center;

font-family: Cabin_400Regular;
width:100%;
margin-top:1%;
padding-left:3%;
padding-right:3%;
`

const DropDownWrapper = styled.View`
`

export default function RepeatMenu({
tlt="Repeat",
}){
    const [title, setTitle] = useState("Never")
    const [toggle, setToggle] = React.useState(false);

    const toggleOpen = () => {
        setToggle(value => !value);
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      }
    

    const changeCat = (catname) => {
        setTitle(catname)
     }
    return ( 
    <Wrapper>
            <RepeatCont onPress={toggleOpen}>
                <AppText wdth="48%" text={"Repeat"} style="body"/>
                <AppText text={title} wdth="45%" align='right' style="tasksub" c="pink"/>
                
                {
                toggle === false &&
                <Icon name="chevron-down"
                fill={"#363630"}
                style={styles.icon}
                />
                }

                {
                toggle === true &&
                <Icon name="chevron-up"
                fill={"#363630"}
                style={styles.icon}
                />
                }
            </RepeatCont>

            
            {toggle === true &&
            <DropDownWrapper style={[styles.list, !toggle ? styles.hidden : undefined]}>
                  {repeatdata.map((o,i)=>
                    <RepeatDropDown 
                    key={i}
                    txt={repeatdata[i].cycle} 
                    onSelect={()=>changeCat(repeatdata[i].cycle)}/>
                )}
            </DropDownWrapper>
            }
        </Wrapper>
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

    list: {
        overflow:'hidden'
    },

    hidden: {
        height: 0
    }
      
  });

  