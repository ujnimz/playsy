import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import SettingsScreen from '_screens/SettingsScreen';
import BottomTabsScreen from './BottomTabsScreen';

import {useTheme} from '_theme/ThemeProvider';
import {iconSize} from '_utilities/Dimentions';

const AppStack = createStackNavigator();

const AppStackScreen = () => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <AppStack.Navigator
      screenOptions={{
        headerTintColor: theme.colors.text,
        headerStyle: {
          backgroundColor: theme.colors.background,
          shadowColor: 'transparent',
        },
      }}>
      <AppStack.Screen
        name="BottomTabsScreen"
        component={BottomTabsScreen}
        options={{headerShown: false}}
      />
      <AppStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={({navigation}) => ({
          headerTitle: 'Settings',
          headerLeft: () => (
            <Icon
              style={styles.icon}
              name="chevron-back"
              size={iconSize}
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      />
    </AppStack.Navigator>
  );
};

const getStyles = ({colors}) => {
  return StyleSheet.create({
    icon: {
      color: colors.text,
    },
  });
};

export default AppStackScreen;
