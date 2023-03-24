import {SafeAreaView, StyleSheet,TextInput, Text, View} from 'react-native';
import * as React from "react";
import {useState} from "react";
import * as Font from "expo-font"
import AppLoading from "expo-app-loading";
import {Picker} from '@react-native-picker/picker'

const fonts = () => { Font.loadAsync({
    'mt-bold':require('./assets/fonts/Montserrat-Bold.ttf'),
    'mt-light':require('./assets/fonts/Montserrat-Light.ttf')
});
  
}
export default function AddScreen() {
    const [name, setName] = useState('shaun');
    const [age, setAge] = useState('30');
    const [font, setFont] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState();
    if (font) {


        return (
            <View style={styles.container}>
                <Text style={styles.title}>Сообщить о нарушении</Text>
                <TextInput
                    placeholder='e.g. John Doe'
                    style={styles.input}
                    onChangeText={(value) => setName(value)}/>

                {/*<Text>Enter age:</Text>*/}
                <TextInput
                    placeholder='e.g. 99'
                    style={styles.input}
                    onChangeText={(value) => setAge(value)}/>

                <Text style={styles.result}>name: {name}, age: {age}</Text>
            </View>
        );
    }
    else {
        return (
            <AppLoading startAsync={fonts}
                        onFinish={() => setFont(true)}
                        onError = {console.warn()}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    input: {
        justifyContent:'center',
        borderWidth: 1,
        borderColor: '#777',
        marginTop:25,
        padding: 8,
        margin: 10,
        width: 300,
    },
    title:{
        justifyContent:'center',
        fontWeight:'bold',
        fontFamily:'mt-bold',
        fontSize:30,
        marginTop:30,
        color:'#000000',

    }
});



