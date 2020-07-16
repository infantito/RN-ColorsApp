import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { FlatList } from 'react-native';
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
  const [colorPalettes, setColorPalettes] = useState([]);

  const fetchColorPalettes = useCallback(async () => {
    const result = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes',
    );

    if (result.ok) {
      const data = await result.json();

      setColorPalettes(data);
    }
  }, []);

  useEffect(() => {
    fetchColorPalettes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      <FlatList
        data={colorPalettes}
        keyExtractor={item => item.paletteName}
        renderItem={renderItem(navigation)}
      />
    </View>
  );
};

export default Home;
