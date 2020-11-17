/**
 * Education React Native App
 * https://github.com/samuhay/mobile-project
 * @Cafer Yükseloğlu
 */

//Main React import
import React from 'react';
//Our Styles for Project
import {Body, Line} from './styles/wrapper';
import Categories from './components/Categories';

const MainScreen = ({navigation}) => {
  return (
    <Body>
      <Line>
      <Categories />
      </Line>
    </Body>
  );
};

export default MainScreen;
