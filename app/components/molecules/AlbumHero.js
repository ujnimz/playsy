import React, {useState} from 'react';
import {StyleSheet, View, Image, Text, ActivityIndicator} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

import {useTheme} from '_theme/ThemeProvider';

const AlbumHero = ({item}) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  const [loading, setLoading] = useState(true);

  const onLoadEnd = () => {
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageHolder}>
        <Image
          onLoadEnd={onLoadEnd}
          source={{
            uri: item.image,
          }}
          style={styles.image}
          resizeMode="cover"
        />
        <ActivityIndicator
          style={styles.activityIndicator}
          animating={loading}
        />
      </View>

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
    </View>
  );
};

const getStyles = ({colors, typography, spacing}) => {
  return StyleSheet.create({
    container: {
      height: 400,
      flex: 1,
      alignContent: 'stretch',
      justifyContent: 'flex-end',
    },
    imageHolder: {
      position: 'absolute',
      alignSelf: 'center',
      width: '100%',
      height: 400,
    },
    image: {
      flex: 1,
    },
    textHolder: {
      padding: spacing.SCALE_12,
      position: 'relative',
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
    activityIndicator: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
  });
};

export default AlbumHero;
