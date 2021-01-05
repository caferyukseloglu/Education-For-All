/**
 * Education React Native App
 * https://github.com/samuhay/mobile-project
 * @Cafer Yükseloğlu
 */

//Main React import
import React from 'react';
//Our Styles for Project
import {useTheme} from 'react-native-paper';
import {Form, Body, Bottom} from '../styles/wrapper';
import {GirlLogo} from '../styles/image';
import {BigButton} from '../styles/buttons';
import {Title, SubTitle} from '../styles/text';

const HomeScreen = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <Body>
      <GirlLogo width="100%" />
      <Title style={{color: colors.title1}}>Welcome To Education</Title>
      <SubTitle style={{color: colors.subtitle1}}>
        Equality in education is the way to reach 100% education and learning.
      </SubTitle>
      <Bottom>
        <Form>
          <BigButton
            margins={[0, 10, 0, 0]}
            text="Login"
            mode="contained"
            bgColor="accent"
            textColor="buttonText1"
            onPress={() => navigation.navigate('Login')}
          />
          <BigButton
            margins={[0, 0, 0, 0]}
            text="Sing In"
            mode="contained"
            bgColor="surface"
            textColor="buttonText2"
            onPress={() => navigation.navigate('RegisterType')}
          />
        </Form>
      </Bottom>
    </Body>
  );
};

export default HomeScreen;
