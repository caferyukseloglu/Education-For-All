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

const LoginScreen = ({ navigation }) => {
  const { colors } = useTheme();

  const [data, setData] = useState({
    email: '',
    password: '',
    secureTextEntry: true,
    isValidEmail: null,
    isValidPassword: null,
    isChecked: false,
  });
  //Controls the Email Input if short than 8 character or white-space or not includes @ and . gives error else success, empty = none
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
  //Controls the Password Input Capital 1 Lower 1 Special 1 Longer than 7
  const passwordControl = (val: string) => {
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
      <Title style={{color: colors.title1}}>Stay in touch</Title>
      <SubTitle style={{color: colors.subtitle1}}>
        You can login to your account by entering your e-mail and password.
      </SubTitle>
      <Form>
        <NewInput
          label="Email"
          topRadius="15"
          topMargin="5px"
          mode="flat"
          onChangeText={(val: string) => emailControl(val)}
          onEndEditing={(e: {nativeEvent: {text: string}}) =>
            emailControl(e.nativeEvent.text)
          }
          error={!data.isValidEmail && data.isValidEmail != null}
          value={data.email}
          theme={{
            colors: {
              text: colors.primary,
              error: colors.error,
              primary: colors.accent,
              placeholder: colors.placeholder,
              background: colors.input1,
            },
          }}
          left={
            <NewInput.Icon name="email" color={colors.placeholder} size={33} />
          }
          right={{
            ...(data.isValidEmail != null
              ? {
                  ...(data.isValidEmail === true ? (
                    <NewInput.Icon name="check-circle" color={colors.success} />
                  ) : (
                    <NewInput.Icon name="alert-circle" color={colors.error} />
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
          onChangeText={(val: any) => passwordControl(val)}
          onEndEditing={(e: {nativeEvent: {text: any}}) =>
            passwordControl(e.nativeEvent.text)
          }
          value={data.password}
          secureTextEntry={data.secureTextEntry ? true : false}
          error={!data.isValidPassword && data.isValidPassword != null}
          theme={{
            colors: {
              text: colors.primary,
              error: colors.error,
              primary: colors.accent,
              placeholder: colors.placeholder,
              background: colors.input2,
            },
          }}
          left={
            <NewInput.Icon
              name="lock-open"
              color={colors.placeholder}
              size={33}
            />
          }
          right={
            <NewInput.Icon
              name={data.secureTextEntry ? 'eye-off' : 'eye'}
              onPress={updateSecureTextEntry}
              color={colors.placeholder}
            />
          }
        />
        <HelperText
          type="error"
          visible={!data.isValidPassword && data.isValidPassword != null}
          theme={{
            colors: {
              error: colors.error,
            },
          }}>
          Error: Password Schema '1234Az1!'
        </HelperText>

        <Line justify="space-between">
          <TouchableRipple onPress={updateChecked}>
            <Line>
              <Checkbox
                color={colors.success}
                status={data.isChecked ? 'checked' : 'unchecked'}
              />
              <CheckText style={{color: colors.text}}>Remember Me</CheckText>
            </Line>
          </TouchableRipple>
          <CheckText
            leftMargin="30px"
            onPress={() => navigation.navigate('Forgot')}
            style={{color: colors.text}}>
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
            bgColor="accent"
            textColor="buttonText1"
            onPress={() => navigation.navigate('Main')}
          />
          <BigButton
            margins={[0, 0, 0, 0]}
            text="Register"
            mode="contained"
            bgColor="surface"
            textColor="buttonText2"
            onPress={() => navigation.navigate('Register')}
          />
        </Form>
      </Bottom>
    </Body>
  );
};

export default LoginScreen;
