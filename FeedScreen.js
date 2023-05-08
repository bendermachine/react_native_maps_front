import SegmentedControl from '@react-native-segmented-control/segmented-control';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View, useColorScheme, Image, TouchableOpacity} from 'react-native';
import {AntDesign } from "@expo/vector-icons";

export default function FeedScreen()
{
    const colorScheme = useColorScheme();
    const [textColor, setTextColor] = useState('#000');
    const [value, setValue] = useState('Unselected');
    const [selectedIndex, setSelectedIndex] = useState(undefined);

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
            <TouchableOpacity style={styles.shadow}>
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

    });
