import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Tasks from './screens/Tasks';
import Decor from './screens/Decor';
import User from './screens/User';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
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

      </Stack.Navigator>
    </NavigationContainer>
  );
}

