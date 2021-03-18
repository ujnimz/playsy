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
        placeholderTextColor={theme.colors.PLACEHOLDER}
        {...rest}
      />
    </View>
  );
};

const getStyles = ({colors, margin, spacing, typography}) => {
  return StyleSheet.create({
    formElement: {
      flexDirection: 'row',
      borderColor: colors.GREY,
      borderBottomWidth: 1,
      ...margin.MARGIN_0_12,
    },
    formTextInput: {
      flex: 1,
      height: spacing.SCALE_28,
      color: colors.PRIMARY,
      ...typography.FONT_REGULAR,
    },
  });
};

export default FormTextInput;
