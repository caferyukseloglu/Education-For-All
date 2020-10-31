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

const RegisterScreen = ({ navigation }) => {
  const { colors } = useTheme();

  const [data, setData] = useState({
    username: '',
    password: '',
    rePassword: '',
    check_textInputChange: null,
    secureTextEntry: true,
    secureTextEntryRe: true,
    isValidUser: null,
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
  const updateSecureTextEntryRe = () => {
    setData({
      ...data,
      secureTextEntryRe: !data.secureTextEntryRe,
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
      <Title>Join to Education</Title>
      <SubTitle>
        You can register for education by entering your e-mail and password.
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
          color="blue"
          textColor="green"
          botRadius="15"
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
        <NewInput
          label="Re-Password"
          color="blue"
          textColor="green"
          botRadius="15"
          botMargin="5px"
          mode="flat"
          value={setData.rePassword}
          secureTextEntry={data.secureTextEntryRe ? true : false}
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
              name={data.secureTextEntryRe ? 'eye-off' : 'eye'}
              onPress={updateSecureTextEntryRe}
              color={colors.gray}
            />
          }
        />
        <TouchableRipple onPress={updateChecked}>
          <Line>
            <Checkbox
              color={colors.green}
              status={data.isChecked ? 'checked' : 'unchecked'}
            />
            <CheckText>I have read and accept the Terms of use</CheckText>
          </Line>
        </TouchableRipple>
        <BigButton
          margins={[0, 10, 0, 0]}
          text="Register"
          mode="contained"
          bgColor="blue"
          textColor="white"
          onPress={() => navigation.navigate('Home')}
        />
        <BigButton
          margins={[0, 0, 0, 0]}
          text="Login"
          mode="contained"
          bgColor="white"
          textColor="dark"
          onPress={() => navigation.navigate('Login')}
        />
      </Form>
    </Body>
  );
};

export default RegisterScreen;
