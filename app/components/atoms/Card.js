import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {useTheme} from '_theme/ThemeProvider';

const Card = ({item, isCenter, navigate}) => {
  const theme = useTheme();
  const styles = getStyles(theme);
  const navigation = useNavigation();

  const [loading, setLoading] = useState(true);

  const onLoadEnd = () => {
    setLoading(false);
  };

  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() =>
          navigation.navigate(navigate, {
            item: item,
          })
        }>
        <View>
          <Image
            onLoadEnd={onLoadEnd}
            source={{
              uri: item.image,
            }}
            style={[
              styles.image,
              {borderRadius: isCenter ? (theme.spacing.SCALE_12 * 10) / 2 : 3},
            ]}
            resizeMode="cover"
          />
          <ActivityIndicator
            style={styles.activityIndicator}
            animating={loading}
          />
        </View>
        <View
          style={[
            styles.titleHolder,
            {justifyContent: isCenter ? 'center' : 'flex-start'},
          ]}>
          <Text
            style={[styles.title, {textAlign: isCenter ? 'center' : 'left'}]}>
            {item.title}
          </Text>
          {item.meta1 !== undefined ? (
            <Text style={styles.meta}>{item.meta1}</Text>
          ) : null}
          {item.meta2 !== undefined ? (
            <Text style={styles.meta}>{item.meta2}</Text>
          ) : null}
        </View>
      </TouchableOpacity>
    </>
  );
};

const getStyles = ({colors, spacing, typography}) => {
  return StyleSheet.create({
    container: {
      width: spacing.SCALE_12 * 10,
      height: 'auto',
      margin: spacing.SCALE_8,
    },
    image: {
      width: spacing.SCALE_12 * 10,
      height: spacing.SCALE_12 * 10,
      marginBottom: spacing.SCALE_8,
    },
    round: {
      borderRadius: (spacing.SCALE_12 * 10) / 2,
    },
    square: {
      borderRadius: 3,
    },
    titleHolder: {
      //alignItems: 'flex-start',
    },
    title: {
      ...typography.FONT_MEDIUM,
      fontSize: spacing.SCALE_12,
      color: colors.PRIMARY,
      flexWrap: 'wrap',
    },
    meta: {
      ...typography.FONT_REGULAR,
      fontSize: spacing.SCALE_18 / 2,
      color: colors.PLACEHOLDER,
      flexWrap: 'wrap',
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

Card.propTypes = {
  item: PropTypes.object.isRequired,
  isCenter: PropTypes.bool.isRequired,
};

export default Card;
