import React from 'react';
import ColorBox from './ColorBox';
import { Title, List } from './StyledCommon';

const renderItem = ({ item }) => (
  <ColorBox color={item.hexCode}>{item.name}</ColorBox>
);

const Screen = ({ title, colors }) => {
  return (
    <List
      data={colors}
      renderItem={renderItem}
      keyExtractor={item => item.name}
      ListHeaderComponent={<Title>{title}</Title>}
    />
  );
};

export default Screen;
