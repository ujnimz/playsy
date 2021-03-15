import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {useTheme} from '_theme/ThemeProvider';

const TrackRow = ({item}) => {
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
        />
        <ActivityIndicator
          style={styles.activityIndicator}
          animating={loading}
        />
      </View>

      <View style={styles.textHolder}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.meta}>{item.title}</Text>
      </View>
      <View>
        <Text>
          <Icon size={22} style={styles.icon} name="heart-outline" />
        </Text>
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
      borderBottomColor: '#323232',
      paddingTop: spacing.SCALE_8 / 2,
      paddingBottom: spacing.SCALE_8 / 2,
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
      color: colors.GREY,
      fontSize: typography.FONT_SIZE_12,
      ...typography.FONT_REGULAR,
    },
    icon: {
      color: colors.PRIMARY,
    },
  });
};

export default TrackRow;
