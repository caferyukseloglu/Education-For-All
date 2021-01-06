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
  text-align: ${(props) => props.textAlign || 'center'};
`;

export const HeadText = styled.Text`
  margin: 30px;
  font-size: 15px;
  color: #000000;
`;

export const SubTitle = styled.Text`
  margin-top: ${(props) => props.marginTop || '10'}px;
  width: 330px;
  left: ${(props) => props.left || '42'}px;
  font-family: Poppins-ExtraLight;
  font-style: normal;
  font-weight: 200;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-align: ${(props) => props.textAlign || 'center'};
`;

export const CourseTitle = styled.Text`
  margin-top: 27px;
  margin-left: 27px;
  width: auto;
  font-family: Poppins-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 36px;
  display: flex;
`;

export const CourseSubtitle = styled.Text`
  margin-left: 27px;
  width: auto;
  font-family: Poppins-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  color: rgba(51, 51, 51, 0.56);
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
  margin-left: 15px;
  width: auto;
  height: 36px;
  font-family: Poppins-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 19.5px;
  display: flex;
  color: #ffffff;
`;

export const CardSubtitle = styled.Text`
  margin-left: 15px;
  width: auto;
  height: 36px;
  font-family: Poppins-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 8px;
  line-height: 12px;
  display: flex;
  color: #ffffff;
`;

export const CategoryText = styled.Text`
  text-align: ${(props) => props.textAlign || 'center'};
`;

export const HPCardsyText = styled.Text`
  text-align: ${(props) => props.textAlign || 'center'};
`;
export const LessonTitle = styled.Text`
  margin-top: 27px;
  margin-left: 15px;
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
  margin-left: 15px;
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

export const RecomTitle = styled.Text`
  width: auto;
  font-family: Poppins-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  display: flex;
`;

export const RecomInfo = styled.Text`
  margin-bottom: 15px;
  width: auto;
  font-family: Poppins-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 15px;
  display: flex;
  color: rgba(51, 51, 51, 0.56);
`;

export const Lesson = styled.Text`
  font-size: 14px;
  line-height: 15px;
  color: #000000;
`;

export const Teacher = styled.Text`
  font-size: 14px;
  line-height: 15px;
  color: #2d9cdb;
`;

export const Duration = styled.Text`
  font-size: 14px;
  line-height: 15px;
  color: #219653;
`;
