import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';
import ColorPaletteModal from './screens/ColorPaletteModal';

const RootStack = createStackNavigator();

const MainStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="🏠" component={Home} />
      <MainStack.Screen
        name="🎨"
        component={ColorPalette}
        options={({ route }) => ({
          title: `🎨 ${route.params.paletteName} 🎨`,
        })}
      />
    </MainStack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="🌎"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen name="🍭" component={ColorPaletteModal} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
