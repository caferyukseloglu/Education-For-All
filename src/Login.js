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

const LoginScreen = ({navigation}) => {
  return (
    <Body>
      <Form>
        <RoundedButton
          color="#2d9cdb"
          onPress={() => navigation.navigate('Home')}
          title="Log In"
          textColor="#fdfdfd"
        />
      </Form>
    </Body>
  );
};

export default LoginScreen;
