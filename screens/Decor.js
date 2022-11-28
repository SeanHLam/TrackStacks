import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import NavMenu from '../components/navmenu/navmenu.js';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components/native';
import { Wrapper, NavWrapper, SliderCont, DecorCont, DecorImage, AssetCont} from '../styles/global.js';
import Header from '../components/header/header.js';
import { default as theme } from "../assets/TSTheme.json";
import DecWidget from '../components/decorwidget/decorwidget.js';
import IconBttn from '../components/iconbttn/iconbttn.js';
import AssetSlider from '../components/assetslider/assetslider.js';
import AppBttn from '../components/button/appbutton';
import Lavender2 from '../assets/lavender.svg'
import Lavender from '../assets/lavender.svg';
import AppleRug from '../assets/applerug.svg';
import Cactus from '../assets/cactus.svg';
import DarkCat from '../assets/darkcat.svg';
import FatCat from '../assets/fatcat.svg';
import Wolf from '../assets/wolf.svg';
import { Animated, View, Image, ScrollView, Text,Pressable, PanResponder} from 'react-native';
import LottieView from 'lottie-react-native';
import Item from '../components/assetslider/item.js';
import { getAuth, onAuthStateChanged, auth } from 'firebase/auth';
import { doc, setDoc, getDoc, updateDoc, arrayUnion, arrayRemove, getFirestore, increment } from "firebase/firestore";
import { useFocusEffect } from '@react-navigation/native';
import ItemDrag from '../components/assetslider/itemdrag.js';
import ModalTut from '../components/modal/modaltut.js';



const Slider = styled(ScrollView)`
padding:3%;


`

const BgCont = styled.View`
width:100%;
display:flex;
justify-content:center;
align-items:center;

`

const Divider = styled.Text`
font-size: 50px;
opacity:0.2;
`

const Content = styled.View`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
`
const SliderWrapper = styled.View`
width:71%;
background-color: #FFFDF4;
border:2px solid #363630;
border-radius: 5px;
box-shadow: 4px 4px #363630;
display: flex;
margin-left: 4%;
margin-right: 4%;
`



export default function Decor({navigation, route}) { 
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


    

    const [shopIndex, setShopIndex] = useState([]);
    const [user, setUser] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalPage, setModalPage] = useState(1);
    

    useFocusEffect(
        React.useCallback(() => {
          //setCurrentUser(user.uid);
          (async () => {
              const auth = getAuth();
              const db = getFirestore();
              //const docRef =  await doc(db, "users", auth.currentUser.uid);
              const docRef =  await doc(db, "users", "gmYamKsYiOMiHSj8e099gj0PEvn2");
              const docSnap = await getDoc(docRef);
              if (docSnap.exists()) {
                setUser(docSnap.data().items)
      
              } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
              } 

            
          })();
          return ()=>{}
        }, [])
      )

      const handleModal = () => {
        setModalVisible(true)
      }

     const  handleModalClose = () => {
        setModalVisible(false)
      }

      const handleModalNext = () =>{
        setModalPage(modalPage + 1)
      }

      const handleModalBack = () => {
        setModalPage(modalPage - 1)
      }
    

    const [background, setBackground] = useState(false);
    const handleBg = () => {
      if (background == false){
        setBackground(true)
      } else if (background == true){
        setBackground(false)
      }
    }

   
      const animation = useRef(null);
      useEffect(() => {
        // You can control the ref programmatically, rather than using autoPlay
        animation.current?.play();
      }, []);


      const pan = useRef(new Animated.ValueXY()).current;

      const panResponder = useRef(
        PanResponder.create({
          onMoveShouldSetPanResponder: () => true,
          onPanResponderGrant: () => {
            pan.setOffset({
              x: pan.x._value,
              y: pan.y._value
            });
          },
          onPanResponderMove: Animated.event(
            [
              null,
              { dx: pan.x, dy: pan.y }
            ]
          ),
          onPanResponderRelease: () => {
            pan.flattenOffset();
          }
        })
      ).current;
  
    
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
        <ModalTut
        onYes={handleModalNext} 
        onClose={handleModalClose} 
        onNo={handleModalBack}  
        mdlvis={modalVisible}
        page={modalPage}
        ></ModalTut>
        <SliderCont>
          <Wrapper>
            <DecorCont>
              <AppBttn bttntext='Buy Items' style='large' nme='shopping-cart' dsp='flex'></AppBttn>
              {/* <AppBttn bttntext='Items' style='small' nme='briefcase' dsp='flex'></AppBttn> */}
              <IconBttn style={{
                alignItems: "right",
              }} onIcon={handleModal} i={"question-mark-circle"}></IconBttn>
            </DecorCont>
            <LottieView
              autoPlay
              ref={animation}
              style={{
                width: 300,
                height: 300,
                zIndex: -20,
                position: "absolute",
                top: 35,
              }}
                
              source={require('../assets/movingBgCool.json')}
            />

            
         
            <BgCont>
            {user.map((o,i)=>
            <Animated.View
            style={{
              transform: [{ translateX: pan.x }, { translateY: pan.y }]
            }}
            {...panResponder.panHandlers} >
                 <ItemDrag
                    size='100'
                    opacity={1} 
                    image={user[i].name}
                    key={i}
                    ></ItemDrag>

            </Animated.View>
                 
            )}
              <DecorImage source={background ? require("../assets/rewardBgWarm.png") : require("../assets/rewardBgCool.png")}/>
            </BgCont>
            <AssetCont>
              <SliderWrapper>
                  <Slider showsHorizontalScrollIndicator={false} horizontal={true}>
                <Content>
                {user.map((o,i)=>
                    <Item
                    onImg={console.log(1)}
                    opacity={1} 
                    image={user[i].name}
                    key={i}
                    ></Item>
                )}
            
                </Content>
                </Slider>
              </SliderWrapper>
              
                <IconBttn i={background ? 'moon' : 'moon-outline'} width='70' height='60' onIcon={handleBg}></IconBttn>
            </AssetCont>

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
