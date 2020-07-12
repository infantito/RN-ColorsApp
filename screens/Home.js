import React from 'react';
import styled from 'styled-components';
import { FlatList } from 'react-native';
import { SOLARIZED, FRONTEND_MASTERS, RAINBOW } from '../constants';
import TouchableOption from '../components/TouchableOption';

const View = styled.View`
  background-color: #fff;
  flex: 1;
  padding: 10px;
`;

const renderItem = navigation => ({ item }) => (
  <TouchableOption navigation={navigation} {...item} />
);

const Home = ({ navigation }) => {
  const COLOR_PALETTES = [
    { title: 'Solarized', colors: SOLARIZED, key: '1' },
    { title: 'Frontend Masters', colors: FRONTEND_MASTERS, key: '2' },
    { title: 'Rainbow', colors: RAINBOW, key: '3' },
  ];

  return (
    <View>
      <FlatList data={COLOR_PALETTES} renderItem={renderItem(navigation)} />
    </View>
  );
};

export default Home;
