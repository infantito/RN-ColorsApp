import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Option, PalettePreview } from './StyledCommon';
import { EmptyColorBox } from '../components/ColorBox';

const renderItem = ({ item }) => <EmptyColorBox {...item} />;

const TouchableOption = ({ navigation, title, colors }) => {
  const onPress = () => {
    navigation.navigate('🎨', { title, colors });
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Option>{title}</Option>
      <PalettePreview
        data={colors.slice(0, 5)}
        keyExtractor={item => item.name}
        renderItem={renderItem}
      />
    </TouchableOpacity>
  );
};

export default TouchableOption;
