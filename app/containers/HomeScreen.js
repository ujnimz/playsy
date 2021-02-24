import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {StyleSheet, Text, ScrollView} from 'react-native';

import {useTheme} from '../utilities/ThemeProvider';
import {gapSize} from '../utilities/Dimentions';

import ToolBar from '../components/layouts/ToolBar';

const HomeScreen = () => {
  const {colors} = useTheme();
  const styles = getStyles(colors);

  return (
    <ScrollView style={styles.container}>
      <ToolBar />
      <Text>Home</Text>
    </ScrollView>
  );
};

const getStyles = (colors) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      padding: gapSize,
    },
  });
};

HomeScreen.propTypes = {
  //signOut: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  //authState: state.authState,
});

export default connect(mapStateToProps, {})(HomeScreen);
