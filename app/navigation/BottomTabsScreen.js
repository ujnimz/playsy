import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../containers/HomeScreen';
import SearchScreen from '../containers/SearchScreen';
import AlbumsScreen from '../containers/AlbumsScreen';
import LibraryScreen from '../containers/LibraryScreen';

import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

function BottomTabsScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#f00',
          tabBarIcon: () => <Icon name="rocket" color="#f00" size={26} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarColor: '#f00',
          tabBarIcon: () => <Icon name="rocket" color="#f00" size={26} />,
        }}
      />
      <Tab.Screen
        name="Albums"
        component={AlbumsScreen}
        options={{
          tabBarLabel: 'Albums',
          tabBarColor: '#f00',
          tabBarIcon: () => <Icon name="rocket" color="#f00" size={26} />,
        }}
      />
      <Tab.Screen
        name="Library"
        component={LibraryScreen}
        options={{
          tabBarLabel: 'Library',
          tabBarColor: '#f00',
          tabBarIcon: () => <Icon name="rocket" color="#f00" size={26} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabsScreen;
