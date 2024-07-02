// Counter app

import React, {useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native' ;

const Page2 = ()   => {
    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.container}>Page 2</Text>
            <Text> Count: {count} </Text>
            <TouchableOpacity style = {styles.button} onPress={() => setCount(count + 1)}>
                <Text style={styles.button}> Increase Count </Text> 
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button} onPress={() => setCount(0)}>
                <Text style={styles.button}> Reset </Text> 
            </TouchableOpacity>
        </View>


    );
};

const styles = StyleSheet.create({
   container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   },
   title: {
    fontSize: 42,
    marginTop: 20,
   },
   button: {
    backgroundColor: '#1e90ff',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
   },
   buttonText: {
    color: '#fff',
    fontSize: 18,
   },     
});

export default Page2;