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
    <Form>
      <Input placeholder="Adınız:" />
      <Button>
        <Span>LogIn</Span>
      </Button>
    </Form>
  </Body>

const GirlLogo = styled(girlLogo)``;
const Form = styled.View`
  padding: 12px;
`;
const Input =styled.TextInput`
  background:red;
  width:100%;
  border-radius:30px;
  padding-left:20px;
  font-size:18px;
  font-weight:bold;
  flex:1;
`;
const Button = styled.TouchableOpacity`
  background:#00A9B1;
  border-radius:30px;
  margin-top:20px;
  padding:20px;

`;
const Span = styled.Text`
  color:white;
  font-size:18px;
`;

const Body = styled.ScrollView`
  flex: 1;
`;
export default App;
