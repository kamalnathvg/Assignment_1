import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import Page2 from './screens/Page2';
// import Page4 from './screens/Page4';
import Page5 from './screens/Page5';


export default function App() {
  return (
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});
