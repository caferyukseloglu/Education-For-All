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
      <Button onClick={() => alert('It works!')} color="#2d9cdb">
        <Span color="#fdfdfd">Giriş Yap</Span>
      </Button>

      <Button onClick={() => alert('It works!')} margin="10px" color="#ffffff">
        <Span color="#000000">Kayıt Ol</Span>
      </Button>
    </Form>
  </Body>

const GirlLogo = styled(girlLogo)``;
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
const Button = styled.TouchableOpacity`
  background: ${(props) => props.color};
  margin-top: ${(props) => (props.margin ? props.margin : 'auto')};
  width: 340px;
  height: 74px;
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
  color: ${(props) => props.color};
`;

const Body = styled.ScrollView`
  flex: 6;
`;
export default App;
