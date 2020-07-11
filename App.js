import React from 'react';
import styled from 'styled-components/native';
import ColorBox from './components/ColorBox';

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

const View = styled.View`
  align-items: center;
  border: 10px solid darkgoldenrod;
  flex: 1;
  justify-content: center;
  padding: 10px;
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  padding: 0 0 10px;
`;

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Title>Here are some boxes of different colors</Title>
        <ColorBox color="#2aa198">Cyan</ColorBox>
        <ColorBox color="#268bd2">Blue</ColorBox>
        <ColorBox color="#d33682">Magenta</ColorBox>
        <ColorBox color="#cb4b16">Orange</ColorBox>
      </View>
    </SafeAreaView>
  );
};

export default App;
