import React from 'react';
import styled, { css } from 'styled-components/native';

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

const Box = styled.View`
  margin-bottom: 10px;
  padding: 10px;
  width: 100%;
`;

const Cyan = styled(Box)`
  background-color: #2aa198;
`;

const Blue = styled(Box)`
  background-color: #268bd2;
`;

const Magenta = styled(Box)`
  background-color: #d33682;
`;

const Orange = styled(Box)`
  background-color: #cb4b16;
`;

const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Title>Here are some boxes of different colors</Title>
        <Cyan>
          <Text>Cyan #2aa198</Text>
        </Cyan>
        <Blue>
          <Text>Blue #268bd2</Text>
        </Blue>
        <Magenta>
          <Text>Magenta #d33682</Text>
        </Magenta>
        <Orange>
          <Text>Orange #cb4b16</Text>
        </Orange>
      </View>
    </SafeAreaView>
  );
};

export default App;
