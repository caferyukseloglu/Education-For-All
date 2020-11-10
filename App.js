/**
 * Education React Native App
 * https://github.com/samuhay/mobile-project
 * @Cafer Yükseloğlu
 */

//For the Navigation
import 'react-native-gesture-handler';
import * as React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/Home';
import LoginScreen from './src/Login';
import RegisterScreen from './src/Register';
import ForgotScreen from './src/Forgot';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    darker: '#333333',
    dark: '#4F4F4F',
    gray: '#828282',
    lightGray: '#BDBDBD',
    lighterGray: '#E0E0E0',
    notWhite: '#F4F4F4',
    white: '#FFFFFF',
    red: '#EB5757',
    orange: '#F2994A',
    yellow: '#F2C94C',
    darkGreen: '#219653',
    green: '#27AE60',
    lightGreen: '#6FCF97',
    darkBlue: '#2F80ED',
    blue: '#2D9CDB',
    lightBlue: '#56CCF2',
    purple: '#9B51E0',
    lightPurple: '#BB6BD9',
    midnightBlue: '#02284F',
  },
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            cardStyle: {backgroundColor: theme.colors.notWhite},
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
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
