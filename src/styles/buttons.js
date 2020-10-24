import React from 'react';
import Button from 'react-native-paper';
import styled from 'styled-components';

export const HomeButton = styled(Button)``;

export const MainButton = styled.TouchableOpacity`
  background: ${(props) => props.color};
  margin-top: ${(props) => props.margin || 'auto'};
  width: 340px;
  height: 74px;
  elevation: 5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export const MainButtonText = styled.Text`
  padding: 20px;
  font-family: Spartan-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 27px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${(props) => props.color};
`;

export const RoundedButton = ({margin, color, onPress, title, textColor}) => (
  <MainButton margin={margin} color={color} onPress={onPress}>
    <MainButtonText color={textColor}>{title}</MainButtonText>
  </MainButton>
);