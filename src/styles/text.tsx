/**
 * Education React Native App
 * https://github.com/samuhay/mobile-project
 * @Cafer Yükseloğlu
 */

import styled from 'styled-components';

export const Title = styled.Text`
  margin-top: 30px;
  width: auto;
  font-family: Poppins-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 36px;
  display: flex;
  align-items: center;
  text-align: center;
`;

export const HeadText = styled.Text`
  margin: 30px;
  font-size: 15px;
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
`;

export const CheckText = styled.Text`
  font-family: Oxygen;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  margin-top: ${(props) => props.topMargin || '0'};
  margin-bottom: ${(props) => props.botMargin || '0'};
  margin-right: ${(props) => props.rightMargin || '0'};
  margin-left: ${(props) => props.leftMargin || '0'};
`;

export const CardTitle = styled.Text`
  margin-top: 25px;
  margin-left:15px;
  width: auto;
  height: 36px;
  font-family: Poppins-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 19.5px;
  display: flex;
  color: #FFFFFF;
`;

export const CardSubtitle = styled.Text`
  margin-left:15px;
  width: auto;
  height: 36px;
  font-family: Poppins-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 8px;
  line-height: 12px;
  display: flex;
  color: #FFFFFF;
`;

export const CategoryText = styled.Text`
  text-align: ${(props) => props.textAlign || 'center'};
`;

export const HPCardsyText = styled.Text`
  text-align: ${(props) => props.textAlign || 'center'};
`;
export const LessonTitle = styled.Text`
  margin-top:27px;
  margin-left:15px;
  width: auto;
  font-family: Poppins-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 16.5px;
  display: flex;
  letter-spacing: 0.12px;
  color: #000000;
`;

export const LessonSubtitle = styled.Text`
  margin-left:15px;
  width: auto;
  font-family: Poppins-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 8px;
  line-height: 9px;
  display: flex;
  letter-spacing: 0.12px;
  color: rgba(0, 0, 0, 0.58);
`;
