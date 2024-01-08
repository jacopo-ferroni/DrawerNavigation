import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet, Text, Pressable, SafeAreaView, StatusBar, Image, View } from 'react-native';

import Pixel from '../assets/GooglePixel7.png';

const windowWidth = Dimensions.get('window').width;
console.log(windowWidth)

const findProportion = (width) => {
    return (width * 636) / 300;
}

/* export default function Home({ navigation }) {
    return (
        <SafeAreaView style={{display: 'flex', alignItems: 'end', justifyContent: 'center', height: '100%'}}>
            <StatusBar />

            <View style={{position: 'relative', paddingLeft: 150, paddingRight: 150}}>
                <Image style={styles.image} source={Pixel} resizeMode='contain' />

                <View style={{position: 'absolute', top: '17.4%', width: '100%', paddingLeft: 15, paddingRight: 15, boxSizing: 'border-box', display: 'none' }}>
                    <View style={{height: 557, backgroundColor: 'gold', borderBottomLeftRadius: 15, borderBottomRightRadius: 15}}>
                        <Text>Prova</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
} */

export default function Home({ navigation }) {
    return (
        <SafeAreaView style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
            <Text>Prova</Text>
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
    },
    
    image: {
        width: 300,
        height: findProportion(300),
    }
});
