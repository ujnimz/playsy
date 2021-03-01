import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {useTheme} from '_theme/ThemeProvider';

const FormPasswordInput = ({inputValue, placeholderText, ...rest}) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  const [hidePassword, setHidePassword] = useState(true);

  const onShowPassword = () => {
    setHidePassword(!hidePassword);
  };

  return (
    <View style={styles.formElement}>
      <TextInput
        style={styles.formTextInput}
        onChangeText={(text) => onChangeEmail(text)}
        value={inputValue}
        placeholder={placeholderText}
        placeholderTextColor={theme.colors.placeHolder}
        secureTextEntry={hidePassword}
        autoCapitalize="none"
        {...rest}
      />
      <TouchableOpacity onPress={onShowPassword}>
        {hidePassword ? (
          <Icon name="eye" color={theme.colors.placeHolder} size={20} />
        ) : (
          <Icon name="eye-off" color={theme.colors.placeHolder} size={20} />
        )}
      </TouchableOpacity>
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

export default FormPasswordInput;
