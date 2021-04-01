import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeStackScreen from '_navigations/HomeStackScreen';
import SearchScreen from '_screens/SearchScreen';
import ForYouScreen from '_screens/ForYouScreen';
import LibraryScreen from '_screens/LibraryScreen';

import PlayerBottomSheet from '_components/organisms/PlayerBottomSheet';

import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomTabsScreen = () => {
  return (
    <>
      <Tab.Navigator tabBar={(props) => <PlayerBottomSheet {...props} />}>
        <Tab.Screen
          name="Home"
          tabBarAccessibilityLabel="Home"
          component={HomeStackScreen}
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
          tabBarAccessibilityLabel="ForYouScreen"
          component={ForYouScreen}
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
    </>
  );
};

export default BottomTabsScreen;
