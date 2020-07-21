import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { FlatList, TouchableOpacity } from 'react-native';
import TouchableOption from '../components/TouchableOption';

const View = styled.View`
  background-color: #fff;
  flex: 1;
  padding: 10px;
`;

const Launcher = styled.Text`
  color: teal;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const renderItem = navigation => ({ item }) => (
  <TouchableOption navigation={navigation} {...item} />
);

const Home = ({ navigation, route }) => {
  const { newColorPalette } = route.params || {};

  const [colorPalettes, setColorPalettes] = useState([]);

  const [isRefreshing, setIsRefreshing] = useState(true);

  const fetchColorPalettes = useCallback(async () => {
    setIsRefreshing(true);

    try {
      const result = await fetch(
        'https://color-palette-api.kadikraman.now.sh/palettes',
      );

      if (result.ok) {
        const data = await result.json();

        setColorPalettes(data);
      }
    } catch {
    } finally {
      setIsRefreshing(false);
    }
  }, []);

  const handleRefresh = useCallback(async () => {
    await fetchColorPalettes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchColorPalettes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (newColorPalette) {
      setColorPalettes(palettes => [newColorPalette, ...palettes]);
    }
  }, [newColorPalette]);

  const handlePress = () => navigation.navigate('🍭');

  return (
    <View>
      <FlatList
        data={colorPalettes}
        keyExtractor={item => item.paletteName}
        renderItem={renderItem(navigation)}
        refreshing={isRefreshing}
        onRefresh={handleRefresh}
        ListHeaderComponent={
          <TouchableOpacity onPress={handlePress}>
            <Launcher>🚀 Add a color schema 🚀</Launcher>
          </TouchableOpacity>
        }
      />
    </View>
  );
};

export default Home;
