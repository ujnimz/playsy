import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '_screens/HomeScreen';
import SearchScreen from '_screens/SearchScreen';
import ForYou from '_screens/ForYou';
import LibraryScreen from '_screens/LibraryScreen';

import BottomTabs from '_organisms/BottomTabs';

import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function BottomTabsScreen() {
  return (
    <Tab.Navigator tabBar={(props) => <BottomTabs {...props} />}>
      <Tab.Screen
        name="Home"
        tabBarAccessibilityLabel="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: (color, active) => (
            <Icon name={`home${active}`} color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        tabBarAccessibilityLabel="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: (color, active) => (
            <Icon name={`search${active}`} color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="For You"
        tabBarAccessibilityLabel="ForYou"
        component={ForYou}
        options={{
          tabBarLabel: 'For You',
          tabBarIcon: (color, active) => (
            <Icon name={`heart${active}`} color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Library"
        tabBarAccessibilityLabel="Library"
        component={LibraryScreen}
        options={{
          tabBarLabel: 'Library',
          tabBarIcon: (color, active) => (
            <Icon name={`library${active}`} color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabsScreen;