/**
 * Education React Native App
 * https://github.com/samuhay/mobile-project
 * @Cafer Yükseloğlu
 */

import styled from 'styled-components';

export const Title = styled.Text`
  margin-top: 30px;
  width: auto;
  height: 36px;
  font-family: Poppins-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 36px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
`;


export const SubTitle = styled.Text`
  margin-top: 10px;
  width: 330px;
  margin-bottom: 25px;
  left: 42px;
  font-family: Poppins-ExtraLight;
  font-style: normal;
  font-weight: 200;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-align: center;
  color: rgba(0, 0, 0, 0.58);
`;

export const CheckText = styled.Text`
  font-family: Oxygen;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  color: #828282;
  margin-top: ${(props) => props.topMargin || '0'};
  margin-bottom: ${(props) => props.botMargin || '0'};
  margin-right: ${(props) => props.rightMargin || '0'};
  margin-left: ${(props) => props.leftMargin || '0'};
`;