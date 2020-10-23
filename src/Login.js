/**
 * Education React Native App
 * https://github.com/samuhay/mobile-project
 * @Cafer Yükseloğlu
 */

//Main React import
import React from 'react';
//Our Styles for Project
import {Form, Body} from './styles/wrapper';
import {RoundedButton} from './styles/buttons';
import {SubTitle, Title} from './styles/text';
import {NewInput} from './styles/input';
import {useTheme} from 'react-native-paper';

const LoginScreen = ({navigation}) => {
  const {colors} = useTheme();
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
          theme={{colors: {text: colors.darker, primary: colors.blue, placeholder : colors.gray,background : colors.lighterGray}}}
          left={<NewInput.Icon name="email" color={colors.gray} size={33} />}
        />
        <NewInput
          label="Password"
          color="blue"
          textColor="green"
          botRadius="15"
          botMargin="5px"
          mode="flat"
          theme={{colors: {text: colors.darker, primary: colors.blue, placeholder : colors.gray, background : colors.white}}}
          left={<NewInput.Icon name="lock-open" color={colors.gray} size={33} />}
        />

        <RoundedButton
          color="#2d9cdb"
          onPress={() => navigation.navigate('Home')}
          title="Log In"
          textColor="#fdfdfd"
        />
        <RoundedButton
          margin="10px"
          color="#ffffff"
          onPress={'#'} //TODO: We will add register here
          title="Sing In"
          textColor="#000000"
        />
      </Form>
    </Body>
  );
};

export default LoginScreen;
