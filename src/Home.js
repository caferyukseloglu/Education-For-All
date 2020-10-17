/**
 * Education React Native App
 * https://github.com/samuhay/mobile-project
 * @Cafer Yükseloğlu
 */

//Main React import
import React from 'react';
//Our Styles for Project
import {Form, Body} from './styles/wrapper';
import {GirlLogo} from './styles/image';
import {RoundedButton} from './styles/buttons';
import {Title, SubTitle} from './styles/text';

const HomeScreen = ({navigation}) => {
  return (
    <Body>
      <GirlLogo width="100%" />
      <Title>Welcome To Education</Title>
      <SubTitle>
        Equality in education is the way to reach 100% education and learning.
      </SubTitle>
      <Form>
        <RoundedButton
          color="#2d9cdb"
          onPress={() => navigation.navigate('Login')}
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

export default HomeScreen;
