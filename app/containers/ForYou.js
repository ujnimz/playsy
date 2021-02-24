import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ForYou = () => {
  return (
    <View style={styles.container}>
      <Text>For You</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ForYou;
