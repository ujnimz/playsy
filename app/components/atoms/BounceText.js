import React from 'react';
import PropTypes from 'prop-types';
import TextTicker from 'react-native-text-ticker';

const BounceText = ({text, style}) => {
  return (
    <TextTicker
      style={style}
      duration={4000}
      animationType="bounce"
      marqueeDelay={2000}>
      {text}
    </TextTicker>
  );
};

BounceText.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
};

export default BounceText;
