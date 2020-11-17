/**
 * Education React Native App
 * https://github.com/samuhay/mobile-project
 * @Cafer Yükseloğlu
 */

//For the Navigation
import 'react-native-gesture-handler';
import * as React from 'react';
import {I18nManager, Platform, LogBox, View, Text} from 'react-native'; //To Detect LTR RTL, Platform, Errors
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {darkColors, defaultColors} from './src/themes/Theme';
import HomeScreen from './src/Home';
import LoginScreen from './src/Login';
import RegisterScreen from './src/Register';
import ForgotScreen from './src/Forgot';
import MainScreen from './src/Main';

LogBox.ignoreAllLogs();

const theme = defaultColors;
const darkTheme = darkColors;

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MainNavigation() {
  return (
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
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function DrawerContent() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Drawer content</Text>
    </View>
  );
}

const App = () => {
  const [isDark, setDark] = React.useState(false);
  return (
    <PaperProvider theme={isDark ? darkTheme : theme}>
      <NavigationContainer>
        <Drawer.Navigator drawerContent={() => <DrawerContent />}>
          <Drawer.Screen name="Home" component={MainNavigation} options={{headerShown: false}}/>
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
