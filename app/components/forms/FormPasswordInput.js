import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {useTheme} from '../../utilities/ThemeProvider';

const FormPasswordInput = ({inputValue, placeholderText, ...rest}) => {
  const {colors} = useTheme();
  const styles = getStyles(colors);

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
        placeholderTextColor={colors.placeHolder}
        secureTextEntry={hidePassword}
        autoCapitalize="none"
        {...rest}
      />
      <TouchableOpacity onPress={onShowPassword}>
        {hidePassword ? (
          <Icon name="eye" color={colors.placeHolder} size={20} />
        ) : (
          <Icon name="eye-off" color={colors.placeHolder} size={20} />
        )}
      </TouchableOpacity>
    </View>
  );
};

const getStyles = (colors) => {
  return StyleSheet.create({
    formElement: {
      flexDirection: 'row',
      marginTop: 10,
      marginBottom: 10,
      borderColor: colors.placeHolder,
      borderBottomWidth: 1,
    },
    formTextInput: {
      flex: 1,
      height: 40,
      color: colors.text,
    },
  });
};

export default FormPasswordInput;
