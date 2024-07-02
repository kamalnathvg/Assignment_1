// Toggle to change bg color app

import React, {useState} from "react";
import {View, Text, StyleSheet, Switch, } from 'react-native';

// Generating random color. 

const getRandomColor = () => {
    const letters = '0123456789ABCDEF'
    let color = '#';
    for (let i=0; i<6; i++) {
        /* Math.random generates floating point number between 0,1. Math.floor rounds the resulting number to largest interger
        ProgressEvent. For eg: 15.67 is rounded to 15 */
        color += letters[Math.floor(Math.random() * 16)]; 
    }
    return color;

};

const Page5 = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState(getRandomColor());

    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
        setBackgroundColor(getRandomColor());
    };

    return (

        <View style={[styles.container, {backgroundColor}]}>
            <Text style={styles.title}> Random Color Page </Text>
            <Switch
            onValueChange={toggleSwitch}
            value={isEnabled}
            />

            <Text style={styles.switchText}> {isEnabled ? "Switch is  ON": "Switch is OFF"} </Text>


        </View>
    );


};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
    },
    switchText: {
      marginTop: 20,
      fontSize: 16,
    },
  });

  export default Page5;
