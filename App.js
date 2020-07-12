import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="🏠" component={Home} />
        <Stack.Screen
          name="🎨"
          component={ColorPalette}
          options={({ route }) => ({ title: `🎨 ${route.params.title} 🎨` })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
