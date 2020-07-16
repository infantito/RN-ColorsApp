import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Option, PalettePreview } from './StyledCommon';
import { EmptyColorBox } from '../components/ColorBox';

const renderItem = ({ item }) => <EmptyColorBox {...item} />;

const TouchableOption = ({ navigation, paletteName, colors }) => {
  const onPress = () => {
    navigation.navigate('🎨', { paletteName, colors });
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Option>{paletteName}</Option>
      <PalettePreview
        data={colors.slice(0, 5)}
        keyExtractor={item => item.colorName}
        renderItem={renderItem}
      />
    </TouchableOpacity>
  );
};

export default TouchableOption;
