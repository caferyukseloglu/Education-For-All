/**
 * Education React Native App
 * https://github.com/samuhay/mobile-project
 * @Cafer Yükseloğlu
 */

//Main React import
import React, {useState} from 'react';
import {useTheme, TouchableRipple, Checkbox} from 'react-native-paper';
//Our Styles for Project
import {Form, Body, Line} from './styles/wrapper';
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
    isValidPassword: true,
    isChecked: false,
  });

  const emailControl = (val) => {
    var trimmedInput = val.trim();
    if (
      trimmedInput.length >= 8 &&
      trimmedInput.includes('@') &&
      trimmedInput.split('@')[1].includes('.')
    ) {
      setData({
        email: val,
        isValidEmail: true,
      });
    } else if (trimmedInput.length >= 1) {
      setData({
        isValidEmail: false,
      });
    } else {
      setData({
        isValidEmail: null,
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
          onChangeText={(val) => emailControl(val)}
          onEndEditing={(e) => emailControl(e.nativeEvent.text)}
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
