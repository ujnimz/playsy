import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, ScrollView} from 'react-native';

import {useTheme} from '_theme/ThemeProvider';

import SingleHero from '_molecules/SingleHero';

const SingleScreen = ({route}) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  const {item} = route.params;

  return (
    <ScrollView style={styles.container}>
      <SingleHero item={item} />
    </ScrollView>
  );
};

const getStyles = ({colors, spacing}) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.BACKGROUND,
      paddingTop: spacing.SAFE_TOP,
    },
  });
};

SingleScreen.propTypes = {
  route: PropTypes.object.isRequired,
};

export default SingleScreen;
