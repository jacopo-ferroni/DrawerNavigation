// CustomDrawerContent.js

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawerContent = (props) => {
    return (
        <DrawerContentScrollView>
            <View style={{ padding: 16 }}>
                {/* Personalizza il contenuto del drawer */}
                <Text style={{fontSize: 18, textAlign: 'center'}}>Custom Header</Text>
            </View>
            <DrawerItemList {...props} />
            {/* Altri componenti personalizzati */}
        </DrawerContentScrollView>
    );
};

export default CustomDrawerContent;
