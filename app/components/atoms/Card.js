import React, {useState} from 'react';
//import PropTypes from 'prop-types';
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

const Card = ({item, isRound}) => {
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
          navigation.navigate('ArtistScreen', {
            item: item,
          })
        }>
        <View style={styles.imageHolder}>
          <Image
            onLoadEnd={onLoadEnd}
            source={{
              uri: item.image,
            }}
            style={[
              styles.image,
              {borderRadius: isRound ? (theme.spacing.SCALE_12 * 10) / 2 : 3},
            ]}
            resizeMode="cover"
          />
          <ActivityIndicator
            style={styles.activityIndicator}
            animating={loading}
          />
        </View>
        <View>
          <Text
            style={[styles.title, {textAlign: isRound ? 'center' : 'left'}]}>
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const getStyles = ({colors, spacing, typography}) => {
  return StyleSheet.create({
    container: {
      marginRight: spacing.SCALE_12,
    },
    imageHolder: {
      flex: 1,
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
    title: {
      ...typography.FONT_MEDIUM,
      fontSize: spacing.SCALE_12,
      color: colors.PRIMARY,
      textAlign: 'center',
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
  //item: PropTypes.object.isRequired,
};

const mapStateToProps = () => ({
  //authState: state.authState,
});

export default connect(mapStateToProps, {})(Card);
