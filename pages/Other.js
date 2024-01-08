import { useState, useEffect } from 'react';
import { StyleSheet, Text, Pressable, SafeAreaView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home(/* { navigation } */) {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{display: 'flex',}}>
            <StatusBar />
            <Pressable style={styles.button} onPress={() => {
                navigation.navigate('Home');
            }}>
                <Text style={styles.text}>Go Home</Text>
            </Pressable>
            {/* <Pressable style={styles.button} onPress={() => {
                console.log(2);
            }}>
                <Text style={styles.text}>Go Camera</Text>
            </Pressable> */}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#2ce07d', 
        padding: 20, 
        borderRadius: 15,
        margin: 10,
    },

    text: {
        color: 'white',
        textAlign: 'center',
    }
});
