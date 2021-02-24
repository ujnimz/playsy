import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import SettingsScreen from '../containers/SettingsScreen';
import BottomTabsScreen from './BottomTabsScreen';

import {useTheme} from '../utilities/ThemeProvider';

const AppStack = createStackNavigator();

const AppStackScreen = () => {
  const {colors} = useTheme();
  const styles = getStyles(colors);

  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="BottomTabsScreen"
        component={BottomTabsScreen}
        options={{headerShown: false}}
      />
      <AppStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={({navigation, route}) => ({
          headerTitle: 'Settings',
          headerLeft: () => (
            <Icon
              style={styles.icon}
              name="chevron-back"
              size={28}
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      />
    </AppStack.Navigator>
  );
};

const getStyles = (colors) => {
  return StyleSheet.create({
    icon: {
      color: colors.text,
    },
  });
};

export default AppStackScreen;
