import React from 'react';
import PropTypes from 'prop-types';
//import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '_screens/HomeScreen';
import ArtistScreen from '_screens/ArtistScreen';
import AlbumScreen from '_screens/AlbumScreen';
import SingleScreen from '_screens/SingleScreen';

import {useTheme} from '_theme/ThemeProvider';

const HomeStack = createStackNavigator();

const HomeStackScreen = ({navigation}) => {
  const theme = useTheme();
  //const styles = getStyles(theme);

  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTintColor: theme.colors.PRIMARY,
        headerStyle: {
          backgroundColor: theme.colors.BACKGROUND,
          shadowColor: 'transparent',
        },
      }}>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="ArtistScreen"
        component={ArtistScreen}
        options={{
          headerTransparent: true,
          title: '',
          headerLeft: () => (
            <Icon
              name="chevron-back-outline"
              onPress={() => navigation.navigate('HomeScreen')}
              size={35}
              color={theme.colors.PRIMARY}
            />
          ),
        }}
      />
      <HomeStack.Screen
        name="AlbumScreen"
        component={AlbumScreen}
        options={{
          headerTransparent: true,
          title: '',
          headerLeft: () => (
            <Icon
              name="chevron-back-outline"
              onPress={() => navigation.navigate('HomeScreen')}
              size={35}
              color={theme.colors.PRIMARY}
            />
          ),
        }}
      />
      <HomeStack.Screen
        name="SingleScreen"
        component={SingleScreen}
        options={{
          headerTransparent: true,
          title: '',
          headerLeft: () => (
            <Icon
              name="chevron-back-outline"
              onPress={() => navigation.goBack()}
              size={35}
              color={theme.colors.PRIMARY}
            />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};

// const getStyles = ({colors}) => {
//   return StyleSheet.create({
//     icon: {
//       color: colors.PRIMARY,
//     },
//   });
// };

HomeStackScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default HomeStackScreen;
