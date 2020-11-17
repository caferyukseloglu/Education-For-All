/**
 * Education React Native App
 * https://github.com/samuhay/mobile-project
 * @Cafer Yükseloğlu
 */
import {DefaultTheme, DarkTheme} from 'react-native-paper';
//Main Theme Colors
export const defaultColors = {
  ...DefaultTheme,
  colors: {
    // Main Colors
    primary: '#000000',
    background: '#F4F4F4',
    accent: '#2D9CDB',
    surface: '#FFFFFF',
    text: '#828282',
    placeholder: 'rgba(51, 51, 51, 0.5)',
    placeholderActive: '#2F80ED',
    backdrop: '#0880AE',
    warning: '#F2C94C',
    success: '#6FCF97',
    error: '#EB5757',
    //Other Color
    backButton: '#2F80ED',
    title1: '#000000',
    subtitle1: 'rgba(0,0,0,0.6)',
    buttonText1: '#FDFDFD',
    buttonText2: '#000000',
    input1: '#E0E0E0',
    input2: '#FFFFFF',
  },
};

//Main Dark Theme Colors
export const darkColors = {
  ...DarkTheme,
  dark: true,
  mode: 'adaptive',
  colors: {
    // Main Colors
    primary: '#F8F5F5',
    background: '#2B2D5B',
    accent: '#515FEB',
    surface: '#232450',
    text: 'rgba(248,245,245,0.7)',
    placeholder: 'rgba(81,95,235,0.4)',
    disabled: 'rgba(248,245,245,0.32)',
    backdrop: '#0880AE',
    warning: '#FFBC57',
    success: 'rgba(20,163,139,0.65)',
    error: '#FF5757',
    //Other Color
    backButton: 'rgba(81,95,235,0.6)',
    title1: 'rgb(248,245,245)',
    subtitle1: 'rgba(248,245,245,0.6)',
    buttonText1: '#F8F5F5',
    buttonText2: '#F8F5F5',
    input1: 'rgb(23,23,52)',
    input2: 'rgba(35,36,80,0.87)',
  },
};
