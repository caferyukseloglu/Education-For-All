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
import {Body, Form, Bottom} from './styles/wrapper';
import {BigButton} from './styles/buttons';
import {SubTitle, Title} from './styles/text';
import {NewInput} from './styles/input';

const ForgotScreen = ({navigation}) => {
  //using the theme colors
  const {colors} = useTheme();

  //hook function to set data, we check if given input is valid and storing e-mail
  const [data, setData] = useState({
    email: '',
    isValidEmail: null,
  });

  //Controls the Email Input if short than 8 character or white space or not includes @ and . gives error else success, empty = none
  const emailControl = (val) => {
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
    <Body>
      <Title>Reset Password</Title>
      <SubTitle>
        Enter your mail and we will send you a rescue mail immediately.
      </SubTitle>
      <Form>
        <NewInput
          label="Email"
          topRadius="15"
          botRadius="15"
          topMargin="5px"
          mode="flat"
          onChangeText={(val) => emailControl(val)}
          onEndEditing={(e) => emailControl(e.nativeEvent.text)}
          error={!data.isValidEmail && data.isValidEmail != null}
          value={data.email}
          theme={{
            colors: {
              text: colors.darker,
              error: colors.red,
              primary: colors.blue,
              placeholder: colors.gray,
              background: colors.lighterGray,
            },
          }}
          left={<NewInput.Icon name="email" color={colors.gray} size={33} />}
          right={{
            ...(data.isValidEmail != null
              ? {
                  ...(data.isValidEmail === true ? (
                    <NewInput.Icon name="check-circle" color={colors.green} />
                  ) : (
                    <NewInput.Icon name="alert-circle" color={colors.red} />
                  )),
                }
              : ''),
          }}
        />
        <HelperText
          type="error"
          visible={!data.isValidEmail && data.isValidEmail != null}
          theme={{
            colors: {
              error: colors.red,
            },
          }}>
          Error: Email Schema '********@****.***'
        </HelperText>
      </Form>
      <Bottom>
        <Form>
          <BigButton
            margins={[0, 10, 0, 0]}
            bgColor="blue"
            text="Send Reset Mail"
            onPress={''} //TODO: will be added later on
            textColor="white"
            mode="contained"
          />
          <BigButton
            margins={[0, 0, 0, 0]}
            color="white"
            onPress={() => navigation.navigate('Login')}
            text="Login"
            textColor="black"
            mode="contained"
          />
        </Form>
      </Bottom>
    </Body>
  );
};

export default ForgotScreen;
