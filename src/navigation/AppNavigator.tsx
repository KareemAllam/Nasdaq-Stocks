import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TickersScreen from '../screens/Tickers/TickersScreen';

type RootStackParamList = {
  Home: undefined;
  Tickers: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Tickers"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Tickers" component={TickersScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

