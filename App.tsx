import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './screens/HomePage';
import RandomImageGenerator from './screens/Page1';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Page5 from './screens/Page5';
import Page2 from './screens/Page2';
import Page4 from './screens/Page4';
import Page3 from './screens/Page3';
import Page1 from './screens/Page1';



const Stack = createNativeStackNavigator()



export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='HomePage'>
          <Stack.Screen name='HomePage' component={HomePage}/>
          <Stack.Screen name='Page1' component={Page1}/>
          <Stack.Screen name='Page2' component={Page2}/>
          <Stack.Screen name='Page3' component={Page3}/>
          <Stack.Screen name='Page4' component={Page4}/>
          <Stack.Screen name='Page5' component={Page5}/>
        </Stack.Navigator>
      </NavigationContainer>
      );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
