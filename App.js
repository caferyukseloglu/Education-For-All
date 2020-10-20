import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ThemeProvider} from 'styled-components';
import HomeScreen from './src/Home';
import LoginScreen from './src/Login';

const Stack = createStackNavigator();
const theme = {
  darker: '#333333',
  dark: '#4F4F4F',
  gray: '#828282',
  lightGray: '#BDBDBD',
  lighterGray: '#E0E0E0',
  white: '#F2F2F2',
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
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
