import React, { useState, useCallback } from 'react';
import { FlatList, Switch, Text } from 'react-native';
import styled from 'styled-components';
import { Alert } from 'react-native';
import { MODAL_COLORS as DATA, PREVIEW_LENGTH } from '../constants';

const Field = styled.TextInput`
  border: 1.5px solid #282c34;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
`;

const Container = styled.View`
  flex: 1;
  padding: 10px;
`;

const Label = styled.Text`
  margin-bottom: 5px;
`;

const Submit = styled.TouchableOpacity`
  align-items: center;
  background-color: #61dafb;
  border-radius: 5px;
  justify-content: center;
  margin-top: 20px;
  padding: 12px 10px;
`;

const SubmitText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

const ColorSection = styled.View`
  align-items: center;
  border-bottom-color: #888;
  border-bottom-width: 2px;
  border-style: solid;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;

const ColorPaletteModal = props => {
  const { navigation } = props;

  const [name, setName] = useState('');

  const [selectedColors, setSelectedColors] = useState([]);

  const handleSubmit = useCallback(() => {
    if (!name.trim()) {
      Alert.alert('Please enter a palette name 🎨');
    } else if (selectedColors.length < PREVIEW_LENGTH) {
      Alert.alert(`Please add at least ${PREVIEW_LENGTH} colors`);
    } else {
      const newColorPalette = {
        paletteName: name,
        colors: selectedColors,
      };

      navigation.navigate('🏠', { newColorPalette });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, selectedColors]);

  const handleValueChange = useCallback((value, selected) => {
    if (value === true) {
      setSelectedColors(colors => [selected, ...colors]);
    } else {
      setSelectedColors(colors =>
        colors.filter(color => color.colorName !== selected.colorName),
      );
    }
  }, []);

  return (
    <Container>
      <Label>Name of the palette 🎨</Label>
      <Field onChangeText={setName} value={name} placeholder="Palette name" />
      <FlatList
        data={DATA}
        keyExtractor={item => item.colorName}
        renderItem={({ item }) => (
          <ColorSection>
            <Text>{item.colorName}</Text>
            <Switch
              value={
                !!selectedColors.find(
                  selectedColor => selectedColor.colorName === item.colorName,
                )
              }
              onValueChange={selected => handleValueChange(selected, item)}
            />
          </ColorSection>
        )}
      />
      <Submit onPress={handleSubmit}>
        <SubmitText>Submit</SubmitText>
      </Submit>
    </Container>
  );
};

export default ColorPaletteModal;
