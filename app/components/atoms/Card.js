import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

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
import {toArray} from '_utilities/helpers';

const Card = ({item, isArtist}) => {
  console.log(item);
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
          navigation.navigate(isArtist ? 'ArtistScreen' : 'AlbumScreen', {
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
              {borderRadius: isArtist ? (theme.spacing.SCALE_12 * 10) / 2 : 3},
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
            {justifyContent: isArtist ? 'center' : 'flex-start'},
          ]}>
          <Text
            style={[styles.title, {textAlign: isArtist ? 'center' : 'left'}]}>
            {item.title}
          </Text>
          <Text style={styles.meta}>
            {isArtist
              ? null
              : toArray(item.artists).map((artist) => artist.title)[0]}
          </Text>
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
      alignItems: 'flex-start',
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
};

const mapStateToProps = () => ({
  //authState: state.authState,
});

export default connect(mapStateToProps, {})(Card);
