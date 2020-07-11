import React from 'react';
import styled from 'styled-components/native';

const Box = styled.View`
  background-color: ${props => props.color};
  margin-bottom: 10px;
  padding: 10px;
  width: 100%;
`;

const Text = styled.Text`
  color: ${props => props.color};
  font-weight: bold;
  text-align: center;
`;

const adjustColor = hexCode =>
  parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1 ? '#000' : '#fff';

const ColorBox = ({ children, color }) => {
  return (
    <Box color={color}>
      <Text color={adjustColor(color)}>
        {children}: {color}
      </Text>
    </Box>
  );
};

export default ColorBox;
