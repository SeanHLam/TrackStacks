import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Tasks from './screens/Tasks';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName='Home'
      screenOptions={{
        headerShown: "true"
      }}
      >
        <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ headerShown: "true" }}
        />
        <Stack.Screen 
        name="Tasks" 
        component={Tasks} 
        options={{ headerShown: "false" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


import React from 'react';
import { Button, Alert} from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout} from '@ui-kitten/components';
import NavMenu from './components/navmenu/navmenu.js';
import { Button1 } from './components/Button/Button1.js';
import { Cont } from './components/navmenu/navmenu.js';



const HomeScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category='h1'>HOME</Text>
    <Cont></Cont>
  </Layout>
);

export default () => (

    <ApplicationProvider style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} {...eva} theme={eva.light}>
      <Button 
        onPress={()  => Alert.alert('simple press')}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
  />
  <Button1/>
  <NavMenu></NavMenu>
    </ApplicationProvider>

);

