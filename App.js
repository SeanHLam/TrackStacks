import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Tasks from './screens/Tasks';
import Decor from './screens/Decor';
import User from './screens/User';
import MakeTask from './screens/MakeTask';
import EditTask from './screens/EditTask';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import Resources from './screens/Resources';
import Archive from './screens/Archive'
import { LogBox } from 'react-native';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import {Cabin_400Regular, Cabin_700Bold  } from '@expo-google-fonts/cabin';
import { DaysOne_400Regular } from '@expo-google-fonts/days-one';
import AppLoading from "expo-app-loading";

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    DaysOne_400Regular,
    Cabin_400Regular,
    Cabin_700Bold 
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  SplashScreen.hideAsync()
  return (
    <NavigationContainer onLayout={onLayoutRootView}>
      <Stack.Navigator 
      initialRouteName='Home'
      screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen 
          name="Home" 
          component={Home} 
        />
        <Stack.Screen 
          name="Tasks" 
          component={Tasks} 
        />        
        <Stack.Screen 
          name="User" 
          component={User} 
        />        
        <Stack.Screen 
          name="Decor" 
          component={Decor} 
        />
        <Stack.Screen 
          name="MakeTask" 
          component={MakeTask} 
        />
        <Stack.Screen 
          name="EditTask" 
          component={EditTask} 
        />
        <Stack.Screen 
          name="SignIn" 
          component={SignIn} 
        />
         <Stack.Screen 
          name="SignUp" 
          component={SignUp} 
        />
         <Stack.Screen 
          name="Resources" 
          component={Resources} 
        />
        <Stack.Screen 
          name="Archive" 
          component={Archive} 
        />
        

      </Stack.Navigator>
    </NavigationContainer>
  );
}

