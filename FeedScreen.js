import SegmentedControl from '@react-native-segmented-control/segmented-control';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View, useColorScheme, Image, TouchableOpacity, Modal} from 'react-native';
import {AntDesign } from "@expo/vector-icons";

export default function FeedScreen()
{
    const colorScheme = useColorScheme();
    const [textColor, setTextColor] = useState('#000');
    const [value, setValue] = useState('Unselected');
    const [selectedIndex, setSelectedIndex] = useState(undefined);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        setTextColor(colorScheme === 'dark' ? '#FFF' : '#000');
    }, [colorScheme]);

    const _onChange = (event) => {
        setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
    };

    const _onValueChange = (val) => {
        setValue(val);
    };

        const [liked, setLiked] = useState(false);

        const handleLikePress = () => {
            setLiked(!liked);
        };

    return (

        <ScrollView
            contentContainerStyle={[
                styles.container,

                {backgroundColor: colorScheme === 'dark' ? '#000' : '#FFF'},
            ]}>

            <View style={styles.segmentSection}>
                <SegmentedControl values={['Акутальные', 'Все']} selectedIndex={0} />
            </View>
            <TouchableOpacity style={styles.shadow} onPress={() => setModalVisible(true)}>
            <View style={styles.report}>
                <Image style={styles.image}
                       source = {require('./assets/snow_img.png')}/>
                <Text style={styles.typeIssue}>Неубранный снег</Text>
                <Text style={styles.date}> 01.01.2022</Text>
                <Text style={styles.street}>Ул.Ленина</Text>
                <Text style={styles.status}>Актуально</Text>

                <TouchableOpacity onPress={handleLikePress}>
                    {/*return <Ionicons name={liked} />;*/}

                    <Text style = {styles.textLike} >{liked ? <AntDesign style={styles.likes} name = 'like1'/> :<AntDesign style={styles.dislike} name = 'like2'/>  } </Text>
                </TouchableOpacity>

            </View>
            </TouchableOpacity>
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {

                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.сenteredView}>
                        <View style={styles.modalView}>
                            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                                <AntDesign style={styles.closeButton} name='close'></AntDesign>
                            </TouchableOpacity>
                            <Text style={styles.modalTitle}>Неубранный снег</Text>
                            <Image style={styles.imageModal}
                                   source = {require('./assets/snow_img.png')}/>
                            <Text style={styles.modalAddress}>Адрес</Text>
                            <Text style={styles.modalStreet}>Ленина</Text>
                            <Text style={styles.modalDate}>01.01.2023</Text>
                            <Text style={styles.modalDescTitle}>Описание</Text>
                            <Text style={styles.modalDesc}>Собрали снег в большую кучу, но не вывозят уже 5й день!</Text>
                            <View style={styles.modalStatus}>
                                <Text style={{textAlign:'center',paddingTop:5}}>Акутально</Text>

                            </View>
                            <TouchableOpacity onPress={handleLikePress}>
                                {/*return <Ionicons name={liked} />;*/}

                                <Text style = {styles.textLikeModal} >{liked ? <AntDesign style={styles.likesModal} name = 'like1'/> :<AntDesign style={styles.dislike} name = 'like2'/>  } </Text>
                            </TouchableOpacity>
                        {/*Собрали снег в большую кучу, но не вывозят уже 5й день!   */}
                        </View>
                    </View>
                </Modal>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create(
    {
        container: {
            // alignItems:"center",
            flex: 1,

        },
    segmentSection: {
        margin: 25,
    },

    report:{
        marginHorizontal:22,
        borderWidth:1,
        borderRadius:20,
        borderColor:'rgba(84,74,74,0.39)',
        width:370,
        height:200,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },



        },
        shadow:{

            // shadowOpacity:1,
            // shadowRadius:5,
            // shadowOffset:{width:0,height:50}

        },
        image:{
            width:350,
            height:130,
            marginHorizontal:9,
            marginTop:5,
            borderRadius:20

        },
        typeIssue: {
            marginHorizontal: 9,
        },
        date:{
            // marginHorizontal:130,
            position:'absolute',
            marginTop:141,
            marginLeft:140,
            color:'rgba(58,53,53,0.71)'
        },
        street: {
            marginHorizontal: 9,
        },
        status:{
            marginHorizontal: 9,
            color:'rgba(48,154,48,0.71)'
        },

        textLike:{
            paddingLeft: 290,
            marginTop:-35
        },
        dislike: {
            position:'absolute',
            marginHorizontal: 9,
            paddingLeft:128,
            fontSize:35,
            color:'rgba(53,145,53,0.71)'
        },
        likes:{
            position:'absolute',
            marginHorizontal: 9,
            paddingLeft:128,
            fontSize:35,
            color:'rgba(53,145,53,0.71)'
            // width:200,
        },
        сenteredView: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 0,
        },
        modalView: {
            margin: 20,
            backgroundColor: 'white',
            borderRadius: 20,
            padding: 35,
            // alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
            width:370,
            height:450
        },

        closeButton:{
            fontSize:30,
            position:'absolute',
            width:30,
            marginLeft:295,
            marginTop:-20
        },
        modalTitle: {
            position:'absolute',
            fontSize:28,
            paddingTop:13,
            marginLeft:12,
            width:230
        },
        imageModal:{
            position:'absolute',
            width:350,
            height:180,
            marginTop:60,
            marginLeft:10,
            borderRadius:20
        },
        modalAddress: {
            position:'absolute',
            fontSize:16,
            paddingTop:250,
            // fontWeight:'500',
            paddingLeft:12,
            fontWeight:'bold',
            // marginRight:0,
            // marginHorizontal:9


        },
        modalStreet: {
            position:'absolute',
            fontSize:16,
            paddingTop:270,
            fontWeight:'500',
            paddingLeft:12,
            // fontWeight:'bold',
        },
        modalDate: {
            position:'absolute',
            fontSize:16,
            fontWeight:'500',
            paddingTop:290,
            paddingLeft:12,
            color:'rgba(33,28,28,0.55)'
        },
        modalDescTitle: {
            position:'absolute',
            fontSize:16,
            paddingTop:310,
            paddingLeft:12,
            fontWeight:'bold',
            color:'rgb(0,0,0)'
        },
        modalDesc: {
            position:'absolute',
            fontSize:16,
            paddingTop:330,
            paddingLeft:12,
            fontWeight:'500',
            color:'rgb(0,0,0)'
        },
        modalStatus:{
            backgroundColor:'#D9D9D9',
            borderRadius:20,
            height:30,
            width:90,
            position:'absolute',
            fontSize:16,
            marginTop:380,
            marginLeft:13,
            fontWeight:'500',
            color:'rgb(0,0,0)'
        },
        textLikeModal: {
            position:'absolute',
            marginHorizontal: 9,
            paddingTop:339,
            paddingLeft:80,
            fontSize:35,
            color:'rgba(53,145,53,0.71)'
        },
        likesModal: {
            position:'absolute',
            marginHorizontal: 9,
            paddingLeft:80,
            paddingTop:100,
            fontSize:35,
            color:'rgba(53,145,53,0.71)'}


    });



