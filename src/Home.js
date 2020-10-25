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
import {BigButton} from './styles/buttons';
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
        <BigButton
          margins={[0, 10, 0, 0]}
          text="Login"
          mode="contained"
          bgColor="blue"
          textColor="white"
          onPress={() => navigation.navigate('Login')}
        />
        <BigButton
          margins={[0, 10, 0, 0]}
          text="Sing In"
          mode="contained"
          bgColor="white"
          textColor="dark"
          onPress={() => console.log('Pressed')}
        />
      </Form>
    </Body>
  );
};

export default HomeScreen;
