import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {useTheme} from '_theme/ThemeProvider';

const IconButton = ({icon, bgColor, iconColor, text}) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <TouchableOpacity
      style={[
        text ? styles.container : styles.iconContainer,
        text ? {backgroundColor: bgColor} : {borderColor: bgColor},
      ]}>
      <>
        <Icon size={22} style={[styles.icon, {color: iconColor}]} name={icon} />
        {text ? (
          <Text style={[styles.text, {color: iconColor}]}>{text}</Text>
        ) : null}
      </>
    </TouchableOpacity>
  );
};

const getStyles = ({colors, typography, spacing}) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 100,
      overflow: 'hidden',
      paddingLeft: spacing.SCALE_18,
      paddingRight: spacing.SCALE_18,
    },
    iconContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 100,
      overflow: 'hidden',
      height: spacing.SCALE_18 * 2,
      width: spacing.SCALE_18 * 2,
      borderWidth: 1,
    },
    text: {
      marginLeft: 12,
      fontSize: typography.FONT_SIZE_14,
      ...typography.FONT_BOLD,
    },
    icon: {
      textAlign: 'center',
    },
  });
};

export default IconButton;
