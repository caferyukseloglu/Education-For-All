/**
 * Education React Native App
 * https://github.com/samuhay/mobile-project
 * @Cafer Yükseloğlu
 */

//Main React import
import React, { useState } from 'react';
import { useTheme, TouchableRipple, Checkbox } from 'react-native-paper';
//Our Styles for Project
import { Form, Body, Line } from './styles/wrapper';
import { BigButton } from './styles/buttons';
import { SubTitle, Title, CheckText } from './styles/text';
import { NewInput } from './styles/input';

const LoginScreen = ({ navigation }) => {
  const { colors } = useTheme();

  const [data, setData] = useState({
    username: '',
    password: '',
    check_textInputChange: null,
    secureTextEntry: true,
    isValidUser: null,
    isValidPassword: true,
    isChecked: false,
  });

  const textInputChange = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else if (val.trim().length > 0) {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: null,
        isValidUser: null,
      });
    }
  };

  const handleValidUser = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else if (val.trim().length > 0) {
      setData({
        ...data,
        isValidUser: false,
      });
    } else {
      setData({
        ...data,
        isValidUser: null,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

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
          onChangeText={(val) => textInputChange(val)}
          onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
          theme={{
            colors: {
              text: colors.darker,
              primary: colors.blue,
              placeholder: colors.gray,
              background: colors.lighterGray,
            },
          }}
          left={<NewInput.Icon name="email" color={colors.gray} size={33} />}
          right={{
            ...(data.isValidUser != null
              ? {
                ...(data.isValidUser === true ? (
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
          value={setData.password}
          secureTextEntry={data.secureTextEntry ? true : false}
          theme={{
            colors: {
              text: colors.darker,
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
          <CheckText leftMargin="30px">Forgot Password</CheckText>
        </Line>
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
    </Body>
  );
};

export default LoginScreen;
