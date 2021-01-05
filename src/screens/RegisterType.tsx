/**
 * Education React Native App
 * https://github.com/samuhay/mobile-project
 * @Cafer Yükseloğlu
 */

//Main React import
import React from 'react';
import {useTheme} from 'react-native-paper';
//Our Styles for Project
import {Form, Body} from '../styles/wrapper';
import {BigButton} from '../styles/buttons';
import {SubTitle, Title} from '../styles/text';

const RegisterTypeScreen = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <Body>
      <Title style={{color: colors.title1}}>Join to Education</Title>
      <SubTitle style={{color: colors.subtitle1}}>
        You can register for education by entering your e-mail and password.
      </SubTitle>

      <Form style={{marginTop: 50}}>
        <BigButton
          margins={[0, 10, 0, 0]}
          text="Student"
          mode="contained"
          bgColor="error"
          textColor="buttonText1"
          onPress={() => navigation.navigate('Register',{userType:1})}
          height= {120}
          radius={20}
        />
        <BigButton
          margins={[0, 0, 0, 0]}
          text="Teacher"
          mode="contained"
          bgColor="warning"
          textColor="buttonText2"
          onPress={() => navigation.navigate('Register',{userType:2})}
          height= {120}
          radius={20}
        />
      </Form>
    </Body>
  );
};

export default RegisterTypeScreen;
