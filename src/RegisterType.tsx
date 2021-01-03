/**
 * Education React Native App
 * https://github.com/samuhay/mobile-project
 * @Cafer Yükseloğlu
 */

//Main React import
import React, {useState} from 'react';
import {
  useTheme,
  TouchableRipple,
  Checkbox,
  HelperText,
} from 'react-native-paper';
//Our Styles for Project
import {Form, Body, Line, Bottom} from './styles/wrapper';
import {BigButton} from './styles/buttons';
import {SubTitle, Title, CheckText} from './styles/text';
import {NewInput} from './styles/input';

const RegisterTypeScreen = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <Body>
      <Title style={{color: colors.title1}}>Join to Education</Title>
      <SubTitle style={{color: colors.subtitle1}}>
        You can register for education by entering your e-mail and password.
      </SubTitle>

      <Form style={{marginTop: 50}}>
        <BigButton
          margins={[0, 10, 0, 0]}
          text="Student"
          mode="contained"
          bgColor="error"
          textColor="buttonText1"
          onPress={() => navigation.navigate('Register')}
          height= {120}
          radius={20}
        />
        <BigButton
          margins={[0, 0, 0, 0]}
          text="Teacher"
          mode="contained"
          bgColor="warning"
          textColor="buttonText2"
          onPress={() => navigation.navigate('Register')}
          height= {120}
          radius={20}
        />
      </Form>
    </Body>
  );
};

export default RegisterTypeScreen;
