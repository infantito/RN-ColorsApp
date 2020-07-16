import React from 'react';
import styled, { css } from 'styled-components/native';

const styles = css`
  background-color: ${props => props.color};
  border-radius: 4px;
  /*
    box-shadow properties only work in iOS
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.75);
  */
  /* shadow properties only work in iOS */
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.3;
  shadow-radius: 1px;
  /* elevation only works in android */
  elevation: 2;
`;

const Box = styled.View`
  ${styles}

  margin-bottom: 10px;
  padding: 10px;
  width: 100%;
`;

const EmptyBox = styled.View`
  ${styles}

  height: 30px;
  margin-right: 10px;
  width: 30px;
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

const EmptyColorBox = ({ hexCode }) => <EmptyBox color={hexCode} />;

export { EmptyColorBox, ColorBox as default };
