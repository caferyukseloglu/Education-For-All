/**
 * Education React Native App
 * https://github.com/samuhay/mobile-project
 * @Cafer Yükseloğlu
 */

import {TextInput} from 'react-native-paper';
import styled from 'styled-components';
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
  shadow-color: black;
  shadow-offset: 0 3px;
  shadowOpacity: 0.29;
  shadowRadius: 4.65px;
  elevation: 7;
`;
