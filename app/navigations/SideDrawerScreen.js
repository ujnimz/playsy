import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from '_screens/HomeScreen';

const Drawer = createDrawerNavigator();

function SideDrawerScreen() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
}

export default SideDrawerScreen;
