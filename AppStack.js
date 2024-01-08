import * as React from 'react';
import { Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

/* PAGES IMPORTS */
import Home from './pages/Home';
import Other from './pages/Other';
/* import Maps from './pages/Maps';
import Camera from './pages/Camera';
import Photos from './pages/Photos';
import Menu from './pages/Menu'; */

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Other" component={Other} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
