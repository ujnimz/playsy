import React from 'react';
//import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {StyleSheet, ScrollView} from 'react-native';

import {useTheme} from '_theme/ThemeProvider';
import {gapSize} from '_utilities/Dimentions';

import ToolBar from '_molecules/ToolBar';
import Row from '_atoms/Row';

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
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <ScrollView style={styles.container}>
      <ToolBar />
      <Row data={DATA} />
      <Row data={DATA} />
    </ScrollView>
  );
};

const getStyles = ({colors}) => {
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

const mapStateToProps = () => ({
  //authState: state.authState,
});

export default connect(mapStateToProps, {})(HomeScreen);
