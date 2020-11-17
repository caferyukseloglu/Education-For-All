/**
 * Education React Native App
 * https://github.com/samuhay/mobile-project
 * @Cafer Yükseloğlu
 */

//For the Navigation
import 'react-native-gesture-handler';
import React from 'react';
import {useTheme} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './Home';
import LoginScreen from './Login';
import RegisterScreen from './Register';
import ForgotScreen from './Forgot';
import MainScreen from './Main';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  const theme = useTheme();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        cardStyle: {backgroundColor: theme.colors.background},
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Forgot"
        component={ForgotScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
