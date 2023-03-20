import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from "react";


export default function FeedScreen() {
    return (
        <View style={styles.container}>
            <Text>Лента</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ab7979',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
