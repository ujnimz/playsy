import React from 'react';
import {StyleSheet, View, ImageBackground, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

import {useTheme} from '_theme/ThemeProvider';

const AlbumHero = ({item}) => {
  const theme = useTheme();
  const styles = getStyles(theme);
  return (
    <View style={styles.container}>
      <ImageBackground source={{uri: item.image}} style={styles.image}>
        <LinearGradient
          style={styles.textHolder}
          colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.6)']}>
          <Text style={styles.text}>{item.title}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              style={styles.metaIcon}
              name="heart-outline"
              onPress={() => navigation.goBack()}
            />
            <Text style={styles.meta}>10K</Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

const getStyles = ({colors, typography, spacing}) => {
  return StyleSheet.create({
    container: {
      height: 400,
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
      alignContent: 'space-between',
      justifyContent: 'flex-end',
    },
    textHolder: {
      padding: spacing.SCALE_12,
    },
    text: {
      color: colors.WHITE,
      fontSize: typography.FONT_SIZE_16 * 2,
      ...typography.FONT_BOLD,
    },
    meta: {
      color: colors.WHITE,
      fontSize: typography.FONT_SIZE_12,
      ...typography.FONT_REGULAR,
    },
    metaIcon: {
      textAlign: 'center',
      color: colors.WHITE,
      fontSize: typography.FONT_SIZE_14,
      marginRight: spacing.SCALE_8 / 2,
    },
  });
};

export default AlbumHero;
