/**
 * Education React Native App
 * https://github.com/samuhay/mobile-project
 * @Cafer Yükseloğlu
 */

//Main React import
import React, {useState} from 'react';
import {useTheme, TouchableRipple, Checkbox, HelperText} from 'react-native-paper';
//Our Styles for Project
import {Form, Body, Line, Bottom} from './styles/wrapper';
import {BigButton} from './styles/buttons';
import {SubTitle, Title, CheckText} from './styles/text';
import {NewInput} from './styles/input';

const LoginScreen = ({navigation}) => {
  const {colors} = useTheme();

  const [data, setData] = useState({
    email: '',
    password: '',
    secureTextEntry: true,
    isValidEmail: null,
    isValidPassword: null,
    isChecked: false,
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
  //Controls the Password Input Capital 1 Lower 1 Special 1 Longer than 7
  const passwordControl = (val) => {
    var trimmedInput = val.trim();
    if (
      trimmedInput.length >= 8 &&
      trimmedInput.search(/[0-9]/) > -1 &&
      trimmedInput.search(/[A-Z]/) > -1 &&
      trimmedInput.search(/[a-z]/) > -1 &&
      trimmedInput.search(/[` !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/) > -1
    ) {
      setData({
        ...data,
        password: trimmedInput,
        isValidPassword: true,
      });
    } else if (trimmedInput.length >= 1) {
      setData({
        ...data,
        password: trimmedInput,
        isValidPassword: false,
      });
    } else {
      setData({
        ...data,
        password: '',
        isValidPassword: null,
      });
    }
  };

  //Controls Password is secure if text secure show *** else show password
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  //Check checked or not
  const updateChecked = () => {
    setData({
      ...data,
      isChecked: !data.isChecked,
    });
  };
  return (
    <Body>
      <Title>Stay in touch</Title>
      <SubTitle>
        You can login to your account by entering your e-mail and password.
      </SubTitle>
      <Form>
        <NewInput
          label="Email"
          topRadius="15"
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
        <NewInput
          label="Password"
          botRadius="15"
          botMargin="5px"
          mode="flat"
          onChangeText={(val) => passwordControl(val)}
          onEndEditing={(e) => passwordControl(e.nativeEvent.text)}
          value={data.password}
          secureTextEntry={data.secureTextEntry ? true : false}
          error={!data.isValidPassword && data.isValidPassword != null}
          theme={{
            colors: {
              text: colors.darker,
              error: colors.red,
              primary: colors.blue,
              placeholder: colors.gray,
              background: colors.white,
            },
          }}
          left={
            <NewInput.Icon name="lock-open" color={colors.gray} size={33} />
          }
          right={
            <NewInput.Icon
              name={data.secureTextEntry ? 'eye-off' : 'eye'}
              onPress={updateSecureTextEntry}
              color={colors.gray}
            />
          }
        />
        <HelperText
          type="error"
          visible={!data.isValidPassword && data.isValidPassword != null}
          theme={{
            colors: {
              error: colors.red,
            },
          }}>
          Error: Password Schema '1234Az1!'
        </HelperText>

        <Line justify="space-between">
          <TouchableRipple onPress={updateChecked}>
            <Line>
              <Checkbox
                color={colors.green}
                status={data.isChecked ? 'checked' : 'unchecked'}
              />
              <CheckText>Remember Me</CheckText>
            </Line>
          </TouchableRipple>
          <CheckText
            leftMargin="30px"
            onPress={() => navigation.navigate('Forgot')}>
            Forgot Password
          </CheckText>
        </Line>
      </Form>
      <Bottom>
        <Form>
          <BigButton
            margins={[0, 10, 0, 0]}
            text="Login"
            mode="contained"
            bgColor="blue"
            textColor="white"
            onPress={() => navigation.navigate('Home')}
          />
          <BigButton
            margins={[0, 0, 0, 0]}
            text="Register"
            mode="contained"
            bgColor="white"
            textColor="dark"
            onPress={() => navigation.navigate('Register')}
          />
        </Form>
      </Bottom>
    </Body>
  );
};

export default LoginScreen;
