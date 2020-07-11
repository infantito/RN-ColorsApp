import React from 'react';
import styled from 'styled-components/native';
import ColorBox from './components/ColorBox';

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  padding: 0 0 10px;
`;

const List = styled.FlatList`
  padding: 10px;
`;

const COLORS = [
  { name: 'Base03', color: '#002b36', key: '1' },
  { name: 'Base02', color: '#073642', key: '2' },
  { name: 'Base01', color: '#586e75', key: '3' },
  { name: 'Base00', color: '#657b83', key: '4' },
  { name: 'Base0', color: '#839496', key: '5' },
  { name: 'Base1', color: '#93a1a1', key: '6' },
  { name: 'Base2', color: '#eee8d5', key: '7' },
  { name: 'Base3', color: '#fdf6e3', key: '8' },
  { name: 'Yellow', color: '#b58900', key: '9' },
  { name: 'Orange', color: '#cb4b16', key: '10' },
  { name: 'Red', color: '#dc322f', key: '11' },
  { name: 'Magenta', color: '#d33682', key: '12' },
  { name: 'Violet', color: '#6c71c4', key: '13' },
  { name: 'Blue', color: '#268bd2', key: '14' },
  { name: 'Cyan', color: '#2aa198', key: '15' },
  { name: 'Green', color: '#859900', key: '16' },
];

const renderItem = ({ item }) => (
  <ColorBox color={item.color}>{item.name}</ColorBox>
);

/**
 * keyExtractor is not necessary in FlatList
 * if your DATA own a key property
 * i.e.: [{..., key: '1'}...]
 */

const App = () => {
  return (
    <SafeAreaView>
      <List
        data={COLORS}
        renderItem={renderItem}
        ListHeaderComponent={<Title>Solarized</Title>}
      />
    </SafeAreaView>
  );
};

export default App;
