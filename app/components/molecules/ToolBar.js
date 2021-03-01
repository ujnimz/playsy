import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import {useTheme} from '_theme/ThemeProvider';
import {iconSize} from '_utilities/Dimentions';

const ToolBar = () => {
  const theme = useTheme();
  const styles = getStyles(theme);
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

const getStyles = ({colors}) => {
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
