import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import {useTheme} from '_theme/ThemeProvider';

const ToolBar = () => {
  const theme = useTheme();
  const styles = getStyles(theme);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Icon
        style={styles.icon}
        name="settings-outline"
        size={theme.spacing.SCALE_12 * 2}
        onPress={() => navigation.navigate('SettingsScreen')}
      />
    </View>
  );
};

const getStyles = ({colors, spacing}) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingRight: spacing.SCALE_12,
    },
    icon: {
      color: colors.PRIMARY,
    },
  });
};

export default ToolBar;
