import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import AnimatedList from './AnimatedList';
import SecretMenu from './SecretMenu';

const Stack = createStackNavigator();
const TransitionScreenOptions = {
  ...TransitionPresets.ScaleFromCenterAndroid, // This is where the transition happens
};

export default function AppContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={TransitionScreenOptions}>
        <Stack.Screen name="List" component={AnimatedList} />
        <Stack.Screen name="SecretMenu" component={SecretMenu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
