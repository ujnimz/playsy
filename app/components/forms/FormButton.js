import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const FormButton = ({buttonTitle, backgroundColor, color, ...rest}) => {
  const styles = getStyles();

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

const getStyles = () => {
  return StyleSheet.create({
    loginButton: {
      alignItems: 'center',
      padding: 10,
      width: 200,
      borderRadius: 30,
      marginTop: 15,
      marginBottom: 15,
    },
    loginButtonText: {
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
  });
};

export default FormButton;
