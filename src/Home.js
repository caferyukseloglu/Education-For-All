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
import {RoundedButton, HomeButton} from './styles/buttons';
import {Title, SubTitle} from './styles/text';
import {useTheme} from 'react-native-paper';

const HomeScreen = ({navigation}) => {
  const {colors} = useTheme();
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
        <HomeButton icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
          Press me
        </HomeButton>
        <RoundedButton
          margin="10px"
          color="#ffffff"
          onPress={() => console.log('Pressed')} //TODO: We will add register here
          title="Sing In"
          textColor="#000000"
        />
      </Form>
    </Body>
  );
};

export default HomeScreen;
