/**
 * Education React Native App
 * https://github.com/samuhay/mobile-project
 * @Cafer Yükseloğlu
 */
import React, {Component} from 'react';
import styled from 'styled-components';

import girlLogo from './girl_logo.svg';

const App = () =>
  <Body>
    <GirlLogo width="100%" />
    <Title>Eğitime Hoşgeldiniz</Title>
    <SubTitle>100’lerce eğitmene ve eğitime kolayca ulaşmanın yolu eğitimde eşitlik.</SubTitle>
    <Form>
      <ButtonLogIn>
        <Span>Giriş Yap</Span>
      </ButtonLogIn>
      <ButtonSignIn>
        <Span>Kayıt Ol</Span>
      </ButtonSignIn>
    </Form>
  </Body>

const GirlLogo = styled(girlLogo)`
  margin-top: 100px;
`;
const Title = styled.Text`
  margin-top: 30px;
  width: 231px;
  height: 36px;
  left: 92px;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 36px;
  /* identical to box height */
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
`;
const SubTitle = styled.Text`
  margin-top: 10px;
  width: 330px;
  height: 87px;
  left: 42px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 200;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-align: center;
  color: rgba(0, 0, 0, 0.58);
`;
const Form = styled.View`
  padding: 0 37px;
  text-align: center;
`;
const ButtonLogIn = styled.TouchableOpacity`
  width: 340px;
  height: 74px;
  background: #2d9cdb;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
const ButtonSignIn = styled.TouchableOpacity`
  width: 340px;
  height: 74px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
const Span = styled.Text`
  padding: 20px;
  font-family: Spartan;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 27px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #fdfdfd;
`;

const Body = styled.ScrollView`
  flex: 1;
`;
export default App;
