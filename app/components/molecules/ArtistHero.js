import React, {useState} from 'react';
import {StyleSheet, View, Image, Text, ActivityIndicator} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

import {useTheme} from '_theme/ThemeProvider';

const ArtistHero = ({item}) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  const [loading, setLoading] = useState(true);

  const onLoadEnd = () => {
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.textHolder}>
        <Text style={styles.text}>{item.title}</Text>
      </View>

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

      <View style={styles.textHolder}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon
            style={styles.metaIcon}
            name="heart-outline"
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.meta}>10K Followers</Text>
        </View>
      </View>
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
      alignSelf: 'center',
      width: 300,
      height: 300,
    },
    image: {
      flex: 1,
    },
    textHolder: {
      alignItems: 'center',
      padding: spacing.SCALE_12,
      position: 'relative',
      textAlign: 'center',
    },
    text: {
      color: colors.WHITE,
      fontSize: typography.FONT_SIZE_16,
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

export default ArtistHero;
