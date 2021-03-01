import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

import {useTheme} from '_theme/ThemeProvider';

const FormTextInput = ({inputValue, placeholderText, ...rest}) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.formElement}>
      <TextInput
        style={styles.formTextInput}
        onChangeText={(text) => onChangeEmail(text)}
        value={inputValue}
        placeholder={placeholderText}
        placeholderTextColor={theme.colors.placeHolder}
        {...rest}
      />
    </View>
  );
};

const getStyles = ({colors, margin, spacing}) => {
  return StyleSheet.create({
    formElement: {
      flexDirection: 'row',
      borderColor: colors.placeHolder,
      borderBottomWidth: 1,
      ...margin.MARGIN_0_12,
    },
    formTextInput: {
      flex: 1,
      height: spacing.SCALE_28,
      color: colors.text,
    },
  });
};

export default FormTextInput;
