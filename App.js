import React from 'react';
import { FlatList } from 'react-native';
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

const DATA = [
  { color: '#2aa198', name: 'Cyan' },
  { color: '#268bd2', name: 'Blue' },
  { color: '#d33682', name: 'Magenta' },
  { color: '#cb4b16', name: 'Orange' },
];

const renderItem = ({ item }) => (
  <ColorBox color={item.color}>{item.name}</ColorBox>
);

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Title>Here are some boxes of different colors</Title>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.color}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
