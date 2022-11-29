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
import AppText from '../components/apptext/apptext.js';
import Wolf from '../assets/wolf.svg';
import { View, Image, ScrollView, Text,Pressable} from 'react-native';
import LottieView from 'lottie-react-native';
import Item from '../components/assetslider/item.js';
import ShopItem from '../components/shopitem/shopitem.js';
import { getAuth, onAuthStateChanged, auth } from 'firebase/auth';
import { doc, setDoc, getDoc, updateDoc, arrayUnion, arrayRemove, getFirestore, increment } from "firebase/firestore";
import { useFocusEffect } from '@react-navigation/native';
import ModalShop from '../components/modal/modalshop.js';

const Slider = styled(ScrollView)`
padding:3%;


`

const Divider = styled.Text`
font-size: 50px;
opacity:0.2;
`

const ShopWrapper = styled.View`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
flex-wrap: wrap;
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



export default function Shop({navigation, route}) { 
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

    const [shop, setShop] = useState([
        {
            name:"Cactus",
            price: 9999
        }

    ])
    const [user, setUser] = useState([]);
    const [bought, setBought] = useState([{
        name:"Cactus",
        purchased:false
    }]);
    const [stars, setStars] = useState([]);
    const [purchased, setPurchased] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalPage, setModalPage] = useState(1);
    const [shopIndex, setShopIndex] = useState(0);
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
              const itemRef =  await doc(db, "items", "decor");
              const itemSnap = await getDoc(itemRef);
              if (docSnap.exists()) {
                setUser(docSnap.data().items)
                setBought(docSnap.data().shop)
                setStars(docSnap.data().stars)
                setStats(docSnap.data().stats)
              } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
              } if (itemSnap.exists()) {
                console.log(itemSnap.data())
                setShop(itemSnap.data().items)
              } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
              }

            
          })();
          return ()=>{}
        }, [])
      )
    
    
    const HandleBuy = (i) =>{
       if (bought[i].purchased === false){
        setModalVisible(true)
        setShopIndex(i)
       }
      
    }

    const HandleClose = () =>{
        setModalVisible(false)
        setModalPage(1)
    }
  
    const HandleYes = async () =>{
      const auth = getAuth();
           
        const db = getFirestore();
        const docRef = doc(db, "users", auth.currentUser.uid);
        stats.spent += shop[shopIndex].price
        if (stars >= shop[shopIndex].price){
            bought[shopIndex].purchased = true
            setDoc(
                docRef,
                {
                  shop : bought,
                  stats : stats
                },
                {merge: true}
              )
            updateDoc(docRef, {
                items: arrayUnion({
                    name:shop[shopIndex].name,
                    purchased:true,
                    opacity:0,
                    invOpacity: 1,
                    x: "0px",
                    y: "0px",
                    id: shopIndex,
                    zIndex: -99,
                    active:false
                })
            });
            
            setModalPage(2)
            //add minus so it costs stars 
             
            updateDoc(docRef, {stars: increment(-shop[shopIndex].price)})

        }else{
            setModalPage(3)
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
        <ModalShop 
        onYes={HandleYes} 
        onClose={console.log(1)} 
        onNo={HandleClose}  
        mdlvis={modalVisible}
        page={modalPage}
        img={shop[shopIndex].name}
        ></ModalShop>
        <SliderCont>
          <Wrapper>
            <AppText style='title' text='Shop'></AppText>
            <ShopWrapper>
                {shop.map((o,i)=>
                    <ShopItem
                    onBttn={()=>HandleBuy(i)}
                    name={shop[i].name}
                    key={i}
                    price={shop[i].price}
                    o={bought[i].purchased === true ? .3 : 1}
                    ></ShopItem>
                )}
            </ShopWrapper>
            <AppBttn bttntext="Back" onBttn={()=>navigation.navigate("Decor")} marginBottom='5%'></AppBttn>
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
