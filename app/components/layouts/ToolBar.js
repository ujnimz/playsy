import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import {useTheme} from '../../utilities/ThemeProvider';
import {iconSize} from '../../utilities/Dimentions';

const ToolBar = () => {
  const {colors} = useTheme();
  const styles = getStyles(colors);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Icon
        style={styles.icon}
        name="settings-outline"
        size={iconSize}
        onPress={() => navigation.navigate('SettingsScreen')}
      />
    </View>
  );
};

const getStyles = (colors) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    icon: {
      color: colors.text,
    },
  });
};

export default ToolBar;
