import {
    SafeAreaView,
    StyleSheet,
    TextInput,
    Text,
    View,
    Keyboard,
    TouchableWithoutFeedback,
    Button,
    Image,
    Platform,
    TouchableOpacity,
    ScrollView,
    StatusBar
} from 'react-native';
import * as React from "react";
import {useCallback, useRef, useState} from "react";
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
    const [desc, setDesc] = useState('');
    const [address,setAddress] = useState('')
    const inputRef = useRef(null);
    const inputRef2 = useRef(null);
    // const [fontsLoaded] = useFonts({
    //     // 'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
    //     'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    // });
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
    const [showPicker, setShowPicker] = useState(false);

    const togglePicker = () => {
        setShowPicker(!showPicker);
    };

    // const onLayoutRootView = useCallback(async () => {
    //     if (fontsLoaded) {
    //         await SplashScreen.hideAsync();
    //     }
    // }, [fontsLoaded]);

    function descCheck() {
        console.log(desc)
        if (desc === "") {
            // console.log("зaшло")
            alert('Заполните описание')
        }
        if (!image) {
            console.log("нет фото")
        }

        inputRef.current.clear();
        inputRef2.current.clear();
        console.log(desc)
        setImage(null)
        setShowPicker(false)


    }




    return (
        <HideKeyboard>
            <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Text style={{fontFamily: 'Montserrat-Bold', fontSize: 27}}>Сообщить о нарушении</Text>
                <TouchableOpacity onPress={togglePicker} style={styles.typeButton}>
                <Text style={styles.typeButton}>Выбрать тип нарушения </Text>
                </TouchableOpacity>

                {showPicker && (
                    <Picker style={styles.picker}
                            selectedValue={selectedLanguage}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedLanguage(itemValue)
                            }>
                        <Picker.Item label="Гололед" value="Гололед"/>
                        <Picker.Item label="Невывезенный мусор" value="Невывезенный мусор"/>
                        <Picker.Item label="Неубранный снег" value="Неубранный снег"/>
                        <Picker.Item label="Акт вандализма" value="Акт вандализма"/>
                        <Picker.Item label="Нарушение в конструкции строения" value="Нарушение в конструкции строения"/>


                    </Picker>
                )
                }
                <Text style={styles.result}>{selectedLanguage}</Text>

                <TextInput
                    multiline
                    numberOfLines={6}
                    ref={inputRef}
                    placeholder='Опишите проблему подробнее'
                    style={styles.inputDescription}
                    onChangeText={(value) => setDesc(value)}
                />
                <TextInput

                    numberOfLines={2}
                    ref={inputRef2}
                    placeholder='Введите адрес'
                    style={styles.inputAddress}
                    onChangeText={(value) => setAddress(value)}
                />



                <TouchableOpacity style={styles.button} onPress={pickImage}>
                    <Text style={styles.buttonText}>Прикрепить фото</Text>
                </TouchableOpacity>
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 150,margin:10}} />}
                <TouchableOpacity style={styles.buttonSend} onPress={descCheck} >
                    {/*<Image style={styles.imageStyle}  source={require('./assets/pinIcon.png')} />*/}
                    <Text style={styles.buttonSend}>Отправить</Text>
                </TouchableOpacity>
            </ScrollView>
            </View>
        </HideKeyboard>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',



    },
    scrollView:{
        backgroundColor: '#fff',
        alignItems: 'center',
        marginHorizontal: 20,
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
    result:{
        fontSize:16,
        marginBottom:5,
        // fontWeight:'bold',
        // textDecorationStyle:'double'
    },
    inputDescription: {

        justifyContent: 'center',
        borderWidth: 1,
        borderRadius:20,
        borderColor: 'rgba(93,85,85,0.24)',
        marginTop:0,
        padding: 8,
        margin: 10,
        // fontFamily:'mt-light',
        width: 300,
        height:200
    },
    title:{
        justifyContent:'center',
        // fontWeight:'bold',
        // fontFamily:'mt-light',
        fontSize:30,
        marginTop:30,
        color:'#000000',

    },
    picker:{
        justifyContent:'center',
        marginTop: 0,
        width:300,
        backgroundColor:'#ffffff',

    },
    button:{
        justifyContent:'center',
        borderRadius:20,
        padding: 10,
        height:40,
        width:200,

        backgroundColor: '#D9D9D9'
    },
    buttonText:{
        marginLeft:23,
        fontSize:16
    },
    typeButton: {
        margin:10,
        borderRadius:20,
        backgroundColor: '#D9D9D9',
        fontSize:16
    },
    buttonSend:{
        // paddingTop:10,
        borderRadius:20,
        backgroundColor: '#D9D9D9',
        margin:10,
        fontSize:16
    },
    inputAddress: {
        borderWidth:1,
        borderRadius:20,
        borderColor: 'rgba(93,85,85,0.24)',
        marginTop:0,
        padding: 8,
        margin: 10,
        // fontFamily:'mt-light',
        width: 300,
        height:40
    }
});



