/**
 * Education React Native App
 * https://github.com/samuhay/mobile-project
 * @Cafer Yükseloğlu
 * @Taha Kızmaz - Taha Sharheed
 */

import React, {useState} from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {useTheme, HelperText} from 'react-native-paper';
//Our Styles for Project
import {Body, Form, Bottom, Line} from './styles/wrapper';
import {BigButton} from './styles/buttons';
import {CourseTitle, SubTitle, Title} from './styles/text';
import {NewInput} from './styles/input';

const ProfileScreen = ({navigation}) => {
  //using the theme colors
  const {colors} = useTheme();

  //hook function to set data, we check if given input is valid and storing e-mail
  const [data, setData] = useState({
    email: '',
    isValidEmail: null,
  });

  //Controls the Email Input if short than 8 character or white space or not includes @ and . gives error else success, empty = none
  const emailControl = (val: string) => {
    var trimmedInput = val.trim();
    if (
      trimmedInput.length >= 8 &&
      trimmedInput.includes('@') &&
      trimmedInput.split('@')[1].includes('.')
    ) {
      setData({
        ...data,
        email: trimmedInput.replace(/ /g, ''),
        isValidEmail: true,
      });
    } else if (trimmedInput.length >= 1) {
      setData({
        ...data,
        email: trimmedInput.replace(/ /g, ''),
        isValidEmail: false,
      });
    } else {
      setData({
        ...data,
        email: '',
        isValidEmail: null,
      });
    }
  };

  return (
    <Body paddings="0 27px">
      <Line>
        <CourseTitle style={{color: colors.title1, textAlign: 'left'}}>
          Profile Page
        </CourseTitle>
      </Line>
    </Body>
  );
};

export default ProfileScreen;
