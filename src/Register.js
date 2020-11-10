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

const RegisterScreen = ({navigation}) => {
  const {colors} = useTheme();

  const [data, setData] = useState({
    email: '',
    password: '',
    rePassword: '',
    secureTextEntry: true,
    secureTextEntryRe: true,
    isValidEmail: null,
    isValidPassword: null,
    isValidRePassword: null,
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
  const passwordControl = (val,type) => {
    var trimmedInput = val.trim();
    if (
      trimmedInput.length >= 8 &&
      trimmedInput.search(/[0-9]/) > -1 &&
      trimmedInput.search(/[A-Z]/) > -1 &&
      trimmedInput.search(/[a-z]/) > -1 &&
      trimmedInput.search(/[` !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/) > -1
    ) {
      if (type === 'password') {
        setData({
          ...data,
          password: trimmedInput,
          isValidPassword: true,
        });
      } else {
        setData({
          ...data,
          rePassword: trimmedInput,
          isValidRePassword: true,
        });
      }
    } else if (trimmedInput.length >= 1) {
      if (type === 'password') {
        setData({
          ...data,
          password: trimmedInput,
          isValidPassword: false,
        });
      } else {
        setData({
          ...data,
          rePassword: trimmedInput,
          isValidRePassword: false,
        });
      }
    } else {
      if (type === 'password') {
        setData({
          ...data,
          password: '',
          isValidPassword: null,
        });
      } else {
        setData({
          ...data,
          rePassword: '',
          isValidRePassword: null,
        });
      }
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
          onChangeText={(val) => emailControl(val)}
          onEndEditing={(e) => emailControl(e.nativeEvent.text)}
          error={!data.isValidEmail && data.isValidEmail != null}
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
          mode="flat"
          onChangeText={(val) => passwordControl(val, 'password')}
          onEndEditing={(e) => passwordControl(e.nativeEvent.text, 'password')}
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
        <NewInput
          label="Re-Password"
          botRadius="15"
          botMargin="5px"
          mode="flat"
          onChangeText={(val) => passwordControl(val, 'rePassword')}
          onEndEditing={(e) => passwordControl(e.nativeEvent.text, 'rePassword')}
          value={data.rePassword}
          secureTextEntry={data.secureTextEntryRe ? true : false}
          error={!data.isValidRePassword && data.isValidRePassword != null}
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
              name={data.secureTextEntryRe ? 'eye-off' : 'eye'}
              onPress={updateSecureTextEntryRe}
              color={colors.gray}
            />
          }
        />
        <HelperText
          type="error"
          visible={(!data.isValidPassword && data.isValidPassword != null) || (!data.isValidRePassword && data.isValidRePassword != null)}
          theme={{
            colors: {
              error: colors.red,
            },
          }}>
          Error: Password Schema '1234Az1!'
        </HelperText>
        <TouchableRipple onPress={updateChecked}>
          <Line>
            <Checkbox
              color={colors.green}
              status={data.isChecked ? 'checked' : 'unchecked'}
            />
            <CheckText>I have read and accept the Terms of use</CheckText>
          </Line>
        </TouchableRipple>
      </Form>
      <Bottom>
        <Form>
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
      </Bottom>
    </Body>
  );
};

export default RegisterScreen;
