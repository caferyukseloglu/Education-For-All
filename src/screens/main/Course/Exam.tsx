//Main React import
import React, {useState} from 'react';
import {
  useTheme,
  ProgressBar,
  Button,
  IconButton,
  Checkbox,
  TouchableRipple,
  Paragraph,
} from 'react-native-paper';
//Our Styles for Project
import {Body, Line, Scroll} from '../../../styles/wrapper';
import {View, Text, useWindowDimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useExamData} from '../../../states/useExam';
import {BigButton} from '../../../styles/buttons';
import {CourseSubtitle, CourseTitle, SubTitle} from '../../../styles/text';

const ExamScreen = ({route, navigation}) => {
  const {lessonContent, lessonType} = route.params;
  const ExamData = useExamData();
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  const finishButton = () =>{
    let trueAnswers=[]
    let falseAnswers=[]
    let emptyAnswers=[]
    
    for(let i = 0; i< Object.keys(ExamData.examdata).length ; i++){ 
      if(lessonContent.examQuestions[i].questionAnswers[ExamData.examdata[("Quiz"+i)]] === -1) {
        emptyAnswers.push("empty")
      }

      else if(lessonContent.examQuestions[i].questionAnswers[ExamData.examdata[("Quiz"+i)]] === undefined){
        emptyAnswers.push("empty")
      }

      else if(lessonContent.examQuestions[i].questionAnswers[ExamData.examdata[("Quiz"+i)]].isTrue==true){
        trueAnswers.push("true")
      }
      else{
        falseAnswers.push("false")
      }
    }
    navigation.navigate("Final")
  }

  const {colors} = useTheme();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{paddingHorizontal: 10, alignItems: 'center'}}>
        <Line
          alignItems="center"
          justify="center"
          style={{flexWrap: 'nowrap', alignContent: 'flex-start'}}>
          <Button onPress={() => navigation.goBack()}>X</Button>
          <ProgressBar
            progress={0.52}
            color={colors.success}
            style={{width: windowWidth - 120}}
          />
          <IconButton icon="flag" color={colors.success} size={20} />
        </Line>
      </View>
      <Scroll>
        {lessonType == 'lesson' ? (
          <View>
            <CourseTitle>{lessonContent.lessonName}</CourseTitle>
            <CourseSubtitle style={{fontSize: 18}}>
              {lessonContent.lessonContent}
            </CourseSubtitle>
          </View>
        ) : (
          <View>
            <CourseTitle>{lessonContent.examName}</CourseTitle>
            <CourseSubtitle>{lessonContent.examDescription}</CourseSubtitle>
            <Exam lesson={lessonContent.examQuestions} />
          </View>
        )}

        <Body
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            marginVertical: 20,
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
          <BigButton
            margins={[10, 10, 20, 20]}
            text="Finish"
            mode="contained"
            bgColor="success"
            textColor="buttonText1"
            height={60}
            radius="5"
            style={{alignSelf: ''}}
            onPress={() => finishButton()}
          />
        </Body>
      </Scroll>
    </SafeAreaView>
  );
};

const Exam = (exam) => {
  const {colors} = useTheme();
  const ExamData = useExamData();
  return (
    <View>
      {exam.lesson.map((question, index) => {
        return (
          <View key={index}>
            <CourseTitle
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                paddingTop: 10,
                color: colors.title1,
                paddingHorizontal: 30,
                alignItems: 'center',
              }}>
              {question.questionTitle}
            </CourseTitle>
            <Body
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-around',
              }}>
              {question.questionAnswers.map((quest, indexn) => {
                return (
                  <View key={indexn}>
                    <TouchableRipple
                      style={{marginTop: 5}}
                      onPress={() => {
                        if (ExamData.examdata['Quiz' + index] !== indexn) {
                          ExamData.setExamData({
                            ...ExamData.examdata,
                            ['Quiz' + index]: indexn,
                          });
                        } else {
                          ExamData.setExamData({
                            ...ExamData.examdata,
                            ['Quiz' + index]: -1,
                          });
                        }
                      }}>
                      <View
                        // eslint-disable-next-line react-native/no-inline-styles
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          paddingVertical: 8,
                          paddingHorizontal: 50,
                          marginHorizontal: 30,
                          backgroundColor: colors.surface,
                        }}>
                        <Paragraph>{quest.answerDescription}</Paragraph>
                        <View pointerEvents="none">
                          <Checkbox
                            status={
                              ExamData.examdata['Quiz' + index] === indexn
                                ? 'checked'
                                : 'unchecked'
                            }
                          />
                        </View>
                      </View>
                    </TouchableRipple>
                  </View>
                );
              })}
            </Body>
          </View>
        );
      })}
    </View>
  );
};

export default ExamScreen;
