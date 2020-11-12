/**
 * Education React Native App
 * https://github.com/samuhay/mobile-project
 * @Cafer Yükseloğlu
 */

import React from 'react';
import {useTheme, Button, Text} from 'react-native-paper';
import styled from 'styled-components';

//Function to push colors from theme
function coloreds(colored) {
  const {colors} = useTheme();
  return colors[colored];
}

export const ButtonSt = styled(Button)`
  border-radius: 10px;
  /*Box Shadows Elevation is for Android*/
  elevation: 5;
  background-color: ${(props) => props.color || 'white'};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  /*Margins*/
  margin-top: ${(props) => props.margins[0] || '0'}px;
  margin-bottom: ${(props) => props.margins[1] || '0'}px;
  margin-right: ${(props) => props.margins[2] || '0'}px;
  margin-left: ${(props) => props.margins[3] || '0'}px;
  /*Paddings*/
  padding-left: ${(props) => props.leftPadding || '0'}px;
  padding-right: ${(props) => props.rightPadding || '0'}px;
`;

export const ButtonStText = styled(Text)`
  textTransform: none;
  font-family: Spartan-Regular;
  font-size: 24px;
  color: ${(props) => props.color || 'black'};
`;

export const BigButton = ({margins, text, mode, textColor, bgColor, onPress}) => (
  <ButtonSt
    color={coloreds(bgColor)}
    mode={mode}
    margins={margins}
    contentStyle={{height: 74}}
    onPress={onPress}>
    <ButtonStText color={coloreds(textColor)}>{text}</ButtonStText>
  </ButtonSt>
);
