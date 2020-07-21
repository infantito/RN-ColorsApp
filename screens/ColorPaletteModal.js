import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { Alert } from 'react-native';

const Field = styled.TextInput`
  border: 1.5px solid #282c34;
  border-radius: 5px;
  padding: 10px;
`;

const View = styled.View`
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
  margin-top: 50px;
  padding: 12px 10px;
`;

const SubmitText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

const ColorPaletteModal = props => {
  const { navigation } = props;

  const [name, setName] = useState('');

  const handleSubmit = useCallback(() => {
    if (!name.trim()) {
      Alert.alert('Please enter a palette name 🎨');
    } else {
      const newColorPalette = {
        paletteName: name,
        colors: [],
      };

      navigation.navigate('🏠', { newColorPalette });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  return (
    <View>
      <Label>Name of the palette 🎨</Label>
      <Field onChangeText={setName} value={name} placeholder="Palette name" />
      <Submit onPress={handleSubmit}>
        <SubmitText>Submit</SubmitText>
      </Submit>
    </View>
  );
};

export default ColorPaletteModal;
