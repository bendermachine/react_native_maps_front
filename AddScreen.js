import {SafeAreaView, StyleSheet,TextInput, Text, View, Keyboard,  TouchableWithoutFeedback,Button,Image, Platform,TouchableOpacity  } from 'react-native';
import * as React from "react";
import {useCallback, useState} from "react";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {Picker} from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';

const HideKeyboard = ({ children }) => (
    <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);



export default function AddScreen() {
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [name, setName] = useState('shaun');
    const [age, setAge] = useState('30');
    const [fontsLoaded] = useFonts({
        // 'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
        'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    });
    const [image, setImage] = useState(null);
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    return (
        <HideKeyboard>
            <View style={styles.container} onLayout={onLayoutRootView}>
                <Text style={{fontFamily: 'Montserrat-Bold', fontSize: 27}}>Сообщить о нарушении</Text>
                <Picker style={styles.picker}
                        selectedValue={selectedLanguage}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedLanguage(itemValue)
                        }>
                    <Picker.Item label="Гололед" value="Гололед" />
                    <Picker.Item label="Невывезенный мусор" value="Невывезенный мусор" />
                    <Picker.Item label="Неубранный снег" value="Неубранный снег" />
                    <Picker.Item label="Акт вандализма" value="Акт вандализма" />
                    <Picker.Item label="Нарушение в конструкции строения" value="Нарушение в конструкции строения"  />


                </Picker>
                {/*<TextInput*/}
                {/*    placeholder='Введите загловок'*/}
                {/*    style={styles.inputTitle}*/}
                {/*    onChangeText={(value) => setName(value)}/>*/}
                {/*<Text style={styles.result}>{selectedLanguage}</Text>*/}

                <TextInput
                    multiline
                    numberOfLines={6}
                    placeholder='Опишите проблему подробнее'
                    style={styles.inputDescription}
                    onChangeText={(value) => setAge(value)}/>

                <Text style={styles.result}>name: {name}, age: {age}</Text>

            {/*<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>*/}
                <TouchableOpacity style={styles.button} onPress={pickImage}>
                    {/*<Image style={styles.imageStyle}  source={require('./assets/pinIcon.png')} />*/}
                    <Text style={styles.buttonText}>Прикрепить фото</Text>
                </TouchableOpacity>
                {image && <Image source={{ uri: image }} />}
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
        marginTop:0,
        padding: 8,
        margin: 10,
        // fontFamily:'mt-light',
        width: 300,
    },
    inputDescription: {

        justifyContent: 'center',
        borderWidth: 1,
        borderRadius:15,
        borderColor: 'rgba(93,85,85,0.24)',
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
    picker:{
        justifyContent:'center',
        marginTop: -10,
        width:300,
        backgroundColor:'#ffffff',



    },
    button:{
        justifyContent:'center',
        borderRadius:20,
        padding: 10,
        height:40,
        width:250,

        backgroundColor: 'rgba(93,85,85,0.24)'
    },
    buttonText:{
        marginLeft:54
    }

});



