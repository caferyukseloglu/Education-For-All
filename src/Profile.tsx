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
