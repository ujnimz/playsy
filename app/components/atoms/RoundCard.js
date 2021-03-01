import React from 'react';
//import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';

import {useTheme} from '_theme/ThemeProvider';
import {gapSize, windowWidth} from '_utilities/Dimentions';

const artist = require('_assets/images/artist.jpg');

const RoundCard = () => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <>
      <TouchableOpacity style={styles.container}>
        <View>
          <Image source={artist} style={styles.image} resizeMode="cover" />
        </View>
        <View>
          <Text style={styles.title}>Athma Liyanage</Text>
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
    image: {
      width: spacing.SCALE_12 * 10,
      height: spacing.SCALE_12 * 10,
      marginBottom: spacing.SCALE_8,
      borderRadius: (spacing.SCALE_12 * 10) / 2,
    },
    title: {
      ...typography.FONT_MEDIUM,
      fontSize: spacing.SCALE_12,
      color: colors.text,
      textAlign: 'center',
    },
  });
};

RoundCard.propTypes = {
  //item: PropTypes.object.isRequired,
};

const mapStateToProps = () => ({
  //authState: state.authState,
});

export default connect(mapStateToProps, {})(RoundCard);
