import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './pages/Home';
import Other from './pages/Other';
/* import Menu from './menus/Menu'; */

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator /* drawerContent={(props) => <Menu {...props} />} */>
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Other" component={Other} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}