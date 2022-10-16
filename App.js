
import React from 'react';
import { Button, Alert} from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, IconRegistry} from '@ui-kitten/components';
import NavMenu from './components/navmenu/navmenu.js';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { Cont } from './components/navmenu/navmenu.js';
import { useState } from 'react';
import { Wrapper, NavWrapper } from './styles/global.js';



const HomeScreen = () => (

  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category='h1'>HOME</Text>
    <Cont></Cont>
  </Layout>
);

export default function App () { 
  const [pages, setPage] = useState(1)
  const HandlePage = (new_page) =>{
    setPage(new_page)
  }
  return(
<ApplicationProvider {...eva} theme={eva.light}>
  <Wrapper>
    <IconRegistry icons={EvaIconsPack} />
    
   
      {/* <Button 
        onPress={()  => Alert.alert('simple press')}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
  /> */}
  <NavWrapper>
    <NavMenu
    activemenu={pages}
    onHome={()=>HandlePage(1)}
    onTask={()=>HandlePage(2)}
    onDecor={()=>HandlePage(3)}
    onUser={()=>HandlePage(4)}
    ></NavMenu>
  </NavWrapper>
    

  </Wrapper>
</ApplicationProvider>
  )};