import React from 'react';
import styled from 'styled-components/native';

const Box = styled.View`
  background-color: ${props => props.color};
  margin-bottom: 10px;
  padding: 10px;
  width: 100%;
`;

const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

const ColorBox = ({ children, color }) => {
  return (
    <Box color={color}>
      <Text>
        {children}: {color}
      </Text>
    </Box>
  );
};

export default ColorBox;
