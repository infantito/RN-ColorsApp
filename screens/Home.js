import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {
  const onPress = () => {
    navigation.navigate('🎨');
  };

  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Text>Solarized</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
