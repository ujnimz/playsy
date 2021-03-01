import React from 'react';
//import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';

import {useTheme} from '_utilities/ThemeProvider';
import {gapSize, windowWidth} from '_utilities/Dimentions';

const artist = require('_assets/images/artist.jpg');

const SquareCard = () => {
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

const getStyles = ({colors}) => {
  return StyleSheet.create({
    container: {
      marginRight: gapSize / 2,
    },
    image: {
      width: windowWidth / 3,
      height: windowWidth / 3,
      marginBottom: gapSize / 3,
      borderRadius: 3,
    },
    title: {
      fontSize: 11,
      fontWeight: '500',
      color: colors.text,
    },
  });
};

SquareCard.propTypes = {
  //signOut: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({
  //authState: state.authState,
});

export default connect(mapStateToProps, {})(SquareCard);
