// Text Input app

import React, {useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

const Page4 = () => {
    const [text, setText] = useState('');

    const GetGreeting = ({text } : any) => {
        if(text !== ""){
            return (
            <Text style={styles.outputText}>Hello, {text} </Text>
            ) 
        }
        
    }

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                placeholder="Type your Name here"
                onChangeText={setText}
                value={text}
            />
            <GetGreeting text = {text} />
           
            <TouchableOpacity style = {styles.button} onPress={() => setText('')}>
                <Text style={styles.button}> Reset </Text> 
            </TouchableOpacity>
        </View>

    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 28,
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 8,
        marginBottom: 20,
        width: '80%',
    },
    outputText: {
        marginTop: 20,
        fontSize: 16,
    },
    button: {
      backgroundColor: '#1e90ff',
      padding: 15,
      borderRadius: 8,
      marginTop: 20,
    },
    
});

export default Page4;