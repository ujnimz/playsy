import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';

import {useTheme} from '../utilities/ThemeProvider';
import {gapSize, windowWidth} from '../utilities/Dimentions';

import ToolBar from '../components/layouts/ui/ToolBar';
import SquareThumbRow from '../components/layouts/ui/SquareThumbRow';
import RoundThumbRow from '../components/layouts/ui/RoundThumbRow';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Me Hitha Thaniyen – Athma Liyanage ft. Thilina Ruhunage',
    meta: 'Athma Liyanage',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Me Hitha Thaniyen – Athma Liyanage ft. Thilina Ruhunage',
    meta: 'Athma Liyanage',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Me Hitha Thaniyen – Athma Liyanage ft. Thilina Ruhunage',
    meta: 'Athma Liyanage',
  },
  {
    id: '58694a0f-3da1-471f-bdds-145571e29d72',
    title: 'Me Hitha Thaniyen – Athma Liyanage ft. Thilina Ruhunage',
    meta: 'Athma Liyanage',
  },
  {
    id: '58694a0f-3da1-471f-bdsf6-145571e29d72',
    title: 'Me Hitha Thaniyen – Athma Liyanage ft. Thilina Ruhunage',
    meta: 'Athma Liyanage',
  },
];

const HomeScreen = () => {
  const {colors} = useTheme();
  const styles = getStyles(colors);

  return (
    <ScrollView style={styles.container}>
      <ToolBar />
      <SquareThumbRow data={DATA} />
      <RoundThumbRow data={DATA} />
      <SquareThumbRow data={DATA} />
      <RoundThumbRow data={DATA} />
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
