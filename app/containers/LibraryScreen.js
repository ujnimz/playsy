import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function LibraryScreen() {
  return (
    <View style={styles.container}>
      <Text>Library</Text>
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

export default LibraryScreen;
