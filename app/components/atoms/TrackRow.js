import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {useTheme} from '_theme/ThemeProvider';

const TrackRow = ({item, openBottomSheet}) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  const [loading, setLoading] = useState(true);
  const [love, setLove] = useState(false);

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
          resizeMode="cover"
          style={styles.image}
        />
        <ActivityIndicator
          style={styles.activityIndicator}
          animating={loading}
        />
      </View>

      <View style={styles.textHolder}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.meta}>
          {item.artists.map((artist) => artist.label).join(', ')}
        </Text>
      </View>
      <View style={styles.iconHolder}>
        <Icon
          size={22}
          style={styles.icon}
          name={love ? 'heart' : 'heart-outline'}
          onPress={() => setLove(!love)}
        />
        <Icon
          size={22}
          style={styles.icon}
          name="ellipsis-horizontal-circle"
          onPress={openBottomSheet}
        />
      </View>
    </View>
  );
};

const getStyles = ({colors, typography, spacing}) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: colors.GREY,
      paddingTop: spacing.SCALE_8 / 2,
      paddingBottom: spacing.SCALE_8 / 2,
      paddingLeft: spacing.SCALE_12,
      paddingRight: spacing.SCALE_12,
    },
    imageHolder: {},
    image: {
      width: spacing.SCALE_12 * 5,
      height: spacing.SCALE_12 * 5,
      borderRadius: 3,
      overflow: 'hidden',
    },
    activityIndicator: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
    textHolder: {
      flex: 1,
      justifyContent: 'flex-start',
      paddingLeft: spacing.SCALE_8,
      //backgroundColor: 'red',
    },
    title: {
      color: colors.PRIMARY,
      fontSize: typography.FONT_SIZE_14,
      ...typography.FONT_REGULAR,
    },
    meta: {
      color: colors.PLACEHOLDER,
      fontSize: typography.FONT_SIZE_12,
      ...typography.FONT_REGULAR,
    },
    iconHolder: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    icon: {
      color: colors.PRIMARY,
      marginLeft: 10,
    },
  });
};

export default TrackRow;
