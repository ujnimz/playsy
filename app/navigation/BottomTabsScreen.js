import React from 'react';
import {View, Text, TouchableOpacity, Button, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../containers/HomeScreen';
import SearchScreen from '../containers/SearchScreen';
import AlbumsScreen from '../containers/AlbumsScreen';
import LibraryScreen from '../containers/LibraryScreen';

import Icon from 'react-native-vector-icons/FontAwesome';

import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import {useTheme} from '../utilities/ThemeProvider';

const getStyles = (colors) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    settingsScreen: {
      height: 500,
      backgroundColor: colors.text,
    },
  });
};

function MyTabBar({state, descriptors, navigation}) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  const {colors} = useTheme();
  const styles = getStyles(colors);

  const renderContent = () => (
    <View style={styles.settingsScreen}>
      <Text>Here</Text>
    </View>
  );

  const sheetRef = React.createRef();
  const fall = new Animated.Value(0);

  return (
    <>
      <View>
        <Button
          title="Open Bottom Sheet"
          onPress={() => sheetRef.current.snapTo(0)}
        />
        <BottomSheet
          ref={sheetRef}
          snapPoints={[500, 60, 60]}
          renderContent={renderContent}
          callbackNode={fall}
          enabledGestureInteraction={true}
        />
      </View>
      <View style={{flexDirection: 'row', backgroundColor: colors.background}}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{flex: 1}}>
              <Text style={{color: isFocused ? colors.primary : '#222'}}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
}

const Tab = createBottomTabNavigator();

function BottomTabsScreen() {
  return (
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
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
