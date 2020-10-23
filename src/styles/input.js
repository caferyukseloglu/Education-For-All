import React from 'react';
import {TextInput, useTheme} from 'react-native-paper';
import styled from 'styled-components';

//Function to push colors from theme
function colores(colored) {
  const {colors} = useTheme();
  return colors[colored];
}

export const NewInput = styled(TextInput)`
  margin-top: ${(props) => props.topMargin || '0'};
  margin-bottom: ${(props) => props.botMargin || '0'};
  margin-right: ${(props) => props.rightMargin || '0'};
  padding-left: ${(props) => props.leftPadding || '0'};
  padding-right: ${(props) => props.rightPadding || '0'};
  borderTopLeftRadius: ${(props) => props.topRadius || '0'}px;
  borderTopRightRadius: ${(props) => props.topRadius || '0'}px;
  borderBottomRightRadius: ${(props) => props.botRadius || '0'}px;
  borderBottomLeftRadius: ${(props) => props.botRadius || '0'}px;
  font-family: ${(props) => props.fontFamily || 'Poppins'};
  font-style: ${(props) => props.fontStyle || 'normal'};
  font-weight: ${(props) => props.fontWeight || 'normal'};
  font-size: ${(props) => props.fontSize || '14px'};
  line-height: ${(props) => props.fontHeight || '21px'};
  text-decoration: ${(props) => props.textDecoration || 'none'};
  overflow: hidden;
`;

/* Version 0.02
export const Input = ({
  mode,
  color,
  textColor,
  underColor,
  selectionColor,
  underlineColor,
  topRadius,
  botRadius,
  topMargin,
  botMargin,
  value,
  label,
}) => (
  <NewInput
    label={label}
    tradius={topRadius}
    bradius={botRadius}
    marTop={topMargin}
    marBot={botMargin}
    value={value}
    mode={mode}
    theme={{colors: {text: colores(textColor), primary: colores(textColor), placeholder : colores(textColor),background : colores(color)}}}
  />
);
*/