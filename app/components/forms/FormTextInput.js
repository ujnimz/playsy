import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

import {useTheme} from '../../utilities/ThemeProvider';

const FormTextInput = ({inputValue, placeholderText, ...rest}) => {
  const {colors} = useTheme();
  const styles = getStyles(colors);

  return (
    <View style={styles.formElement}>
      <TextInput
        style={styles.formTextInput}
        onChangeText={(text) => onChangeEmail(text)}
        value={inputValue}
        placeholder={placeholderText}
        placeholderTextColor={colors.placeHolder}
        {...rest}
      />
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

export default FormTextInput;
