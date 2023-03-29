import {SafeAreaView, StyleSheet,TextInput, Text, View, Keyboard,  TouchableWithoutFeedback } from 'react-native';
import * as React from "react";
import {useCallback, useState} from "react";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const HideKeyboard = ({ children }) => (
    <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);
export default function AddScreen() {

    const [name, setName] = useState('shaun');
    const [age, setAge] = useState('30');
    const [fontsLoaded] = useFonts({
        // 'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
        'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    // if (!fontsLoaded) {
    //     return null;
    // }

    return (
        <HideKeyboard>
            <View style={styles.container} onLayout={onLayoutRootView}>
                <Text style={{fontFamily: 'Montserrat-Bold', fontSize: 27}}>Сообщить о нарушении</Text>

                <TextInput
                    placeholder='Введите загловок'
                    style={styles.inputTitle}
                    onChangeText={(value) => setName(value)}/>


                <TextInput
                    multiline
                    numberOfLines={6}
                    placeholder='Опишите проблему подробнее'
                    style={styles.inputDescription}
                    onChangeText={(value) => setAge(value)}/>

                <Text style={styles.result}>name: {name}, age: {age}</Text>
            </View>

        </HideKeyboard>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    inputTitle: {
        justifyContent:'center',
        borderWidth: 1,
        borderColor: '#777',
        marginTop:25,
        padding: 8,
        margin: 10,
        // fontFamily:'mt-light',
        width: 300,
    },
    inputDescription: {
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#777',
        marginTop:25,
        padding: 8,
        margin: 10,
        // fontFamily:'mt-light',
        width: 300,
        height:200
    },
    title:{
        justifyContent:'center',
        fontWeight:'bold',
       // fontFamily:'mt-light',
        fontSize:30,
        marginTop:30,
        color:'#000000',

    },

});



