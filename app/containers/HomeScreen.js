import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

import SideDrawerScreen from '../navigation/SideDrawerScreen';
import BottomTabsScreen from '../navigation/BottomTabsScreen';

import auth from '@react-native-firebase/auth';

const onLogOut = () => {
  auth()
    .signOut()
    .then(() => console.log('User signed out!'));
};

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Test</Text>
      <Button title="Logout" onPress={onLogOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
