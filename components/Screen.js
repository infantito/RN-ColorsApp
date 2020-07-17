import React from 'react';
import ColorBox from './ColorBox';
import { Title, List } from './StyledCommon';

const renderItem = ({ item }) => (
  <ColorBox color={item.hexCode}>{item.colorName}</ColorBox>
);

const Screen = ({ paletteName, colors }) => {
  return (
    <List
      data={colors}
      renderItem={renderItem}
      keyExtractor={item => item.colorName}
      ListHeaderComponent={<Title>{paletteName}</Title>}
    />
  );
};

export default Screen;
