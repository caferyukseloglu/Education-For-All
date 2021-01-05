/**
 * Education React Native App
 * https://github.com/samuhay/mobile-project
 * @Cafer Yükseloğlu
 * @Taha Kızmaz - Taha Sharheed
 */

import React from 'react';
import {useTheme} from 'react-native-paper';
//Our Styles for Project
import {Body, Line} from '../../styles/wrapper';
import {CourseTitle} from '../../styles/text';

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
