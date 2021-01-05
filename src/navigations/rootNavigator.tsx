import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {DefaultTheme, DarkTheme} from '@react-navigation/native';
import {useTheme} from 'react-native-paper';
import {StackNavigator} from './stackContent';

const Stack = createStackNavigator();

export const RootNavigator = () => {
  const theme = useTheme();
  const navigationTheme = theme.dark ? DarkTheme : DefaultTheme;

  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={StackNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
