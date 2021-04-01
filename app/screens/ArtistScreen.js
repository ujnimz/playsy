import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {useTheme} from '_theme/ThemeProvider';

const ArtistScreen = ({route}) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  const {item} = route.params;
  console.log(item);

  return (
    <View style={styles.container}>
      <Text>{item.title}</Text>
      <Text>Artist Albums List</Text>
      <Text>Artist Singles List</Text>
      <Text>Similar Artists</Text>
    </View>
  );
};

const getStyles = ({colors}) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.BACKGROUND,
    },
  });
};

export default ArtistScreen;
