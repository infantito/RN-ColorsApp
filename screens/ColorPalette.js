import React from 'react';
import Screen from '../components/Screen';

const ColorPalette = ({ route }) => {
  return <Screen {...route.params} />;
};

export default ColorPalette;
