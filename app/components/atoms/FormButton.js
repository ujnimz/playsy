import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

import {useTheme} from '_theme/ThemeProvider';

const FormButton = ({buttonTitle, backgroundColor, color, ...rest}) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <TouchableOpacity
      style={[styles.loginButton, {backgroundColor: backgroundColor}]}
      {...rest}>
      <Text style={[styles.loginButtonText, {color: color}]}>
        {buttonTitle}
      </Text>
    </TouchableOpacity>
  );
};

const getStyles = ({spacing, margin, padding}) => {
  return StyleSheet.create({
    loginButton: {
      alignItems: 'center',
      width: spacing.SCALE_18 * 10,
      borderRadius: spacing.SCALE_18,
      ...margin.MARGIN_0_18,
      ...padding.PADDING_12,
    },
    loginButtonText: {
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
  });
};

export default FormButton;
