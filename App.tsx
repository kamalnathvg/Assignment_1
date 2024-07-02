import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './screens/HomePage';
import RandomImageGenerator from './screens/Page1';
import Page3 from './screens/Page3';
import Page1 from './screens/Page1';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator()
// import Page2 from './screens/Page2';
// import Page4 from './screens/Page4';
import Page5 from './screens/Page5';


export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='HomePage'>
          <Stack.Screen name='HomePage' component={HomePage}/>
          <Stack.Screen name='Page1' component={Page1}/>
          <Stack.Screen name='Page3' component={Page3}/>
        </Stack.Navigator>
      </NavigationContainer>
      );
    <View style={styles.container}>
      {/* <Page2/>
      <Page4/> */}
      <Page5/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
