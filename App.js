
import React from 'react';
import { Button, Alert} from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, IconRegistry} from '@ui-kitten/components';
import NavMenu from './components/navmenu/navmenu.js';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { Cont } from './components/navmenu/navmenu.js';
import { useState } from 'react';



const HomeScreen = () => (

  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category='h1'>HOME</Text>
    <Cont></Cont>
  </Layout>
);



export default function App () { 
  const [pages, setPage] = useState(0)
  return(
<>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} {...eva} theme={eva.light}>
      {/* <Button 
        onPress={()  => Alert.alert('simple press')}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
  /> */}
  <NavMenu></NavMenu>
    </ApplicationProvider>
</>
  )};