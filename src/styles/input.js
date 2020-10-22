import React from 'react';
import styled from 'styled-components';

export const MainInput = styled.TextInput`
  background: ${props => props.theme.colors[props.color] || 'black'};
  margin-top: ${(props) => props.margin || 'auto'};
  borderTopLeftRadius: ${(props) => props.tradius || '0'}px;
  borderTopRightRadius: ${(props) => props.tradius || '0'}px;
  borderBottomRightRadius: ${(props) => props.bradius || '0'}px;
  borderBottomLeftRadius: ${(props) => props.bradius || '0'}px;
  color: ${(props) => props.fontColor || 'white'};
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
`;

export const FinalInput = ({
  top,
  bottom,
  margin,
  color,
  onPress,
  title,
  textColor,
}) => (
  <MainInput
    fontColor={textColor}
    tradius={top}
    bradius={bottom}
    margin={margin}
    color={color}
    onPress={onPress}
   />
);
