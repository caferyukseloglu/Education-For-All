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
import {FinalInput} from './styles/input';

const LoginScreen = ({navigation}) => {
  return (
    <Body>
      <Title>Stay in touch</Title>
      <SubTitle>
        You can login to your account by entering your e-mail and password.
      </SubTitle>
      <Form>
        <FinalInput
          textColor="#ffffff"
          top="15"
          color="dark"
          autoCompleteType="email"
          keyboardType="email-address"
          textContentType="emailAddress"
          /*inlineImageLeft='search_icon'*/
        />
        <FinalInput
          textColor="#000"
          bottom="15"
          color="white"
          autoCompleteType="email"
          keyboardType="email-address"
          textContentType="emailAddress"
          /*inlineImageLeft='search_icon'*/
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
          onPress={''} //TODO: We will add register here
          title="Sing In"
          textColor="#000000"
        />
      </Form>
    </Body>
  );
};

export default LoginScreen;
