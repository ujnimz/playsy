import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from '../containers/HomeScreen';

//import Icon from 'react-native-vector-icons/FontAwesome';

const Drawer = createDrawerNavigator();

function SideDrawerScreen() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
}

export default SideDrawerScreen;
