import React from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";


const HomePage = ({navigation} : any) => {

    return(
        <SafeAreaView>
        <Text style= {styles.headerText}>HomePage</Text>
        <View style= {styles.content}>
            <Button title="Go to Page 1" onPress={() =>{navigation.navigate('Page1')}}/>
            <Button title="Go to Page 2" onPress={() =>{}}/>
            <Button title="Go to Page 3" onPress={() =>{navigation.navigate('Page3')}}/>
            <Button title="Go to Page 4" onPress={() =>{}}/>
            <Button title="Go to Page 5" onPress={() =>{}}/>

        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex : 1
    },
    headerText : {
        fontSize: 25,
        alignSelf: 'center',
        marginBottom: 20
    },
    content: {
        justifyContent: 'space-between'
    }
})


export default HomePage