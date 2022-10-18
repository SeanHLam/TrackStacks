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

