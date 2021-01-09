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
import {Body, Bottom, Line, Scroll} from '../../../styles/wrapper';
import {View, Text, useWindowDimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BigButton} from '../../../styles/buttons';
import { Title } from '../../../styles/text';

const ExamScreen = ({route, navigation}) => {
  const {lessonContent, lessonType} = route.params;
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

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
          <Text>{lessonContent.lessonContent}</Text>
        ) : (
          <View>
            <Text>{lessonContent.examName}</Text>
            <Text>{lessonContent.examDescription}</Text>
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
            text="Next"
            mode="contained"
            bgColor="success"
            textColor="buttonText1"
            height={60}
            radius="5"
          />
        </Body>
      </Scroll>
    </SafeAreaView>
  );
};

const Exam = (exam) => {
  const {colors} = useTheme();
  return (
    <View>
      {exam.lesson.map((question,index) =>{
        const [checked, setChecked] = useState('-1');
        return (
          <View key={index}>
            <Text
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                paddingTop: 10,
                color: colors.title1,
                paddingHorizontal: 30,
                alignItems: 'center',
              }}>
              {question.questionTitle}
            </Text>
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
                      onPress={() =>
                        checked != index.toString() + indexn.toString()
                          ? setChecked(index.toString() + indexn.toString())
                          : setChecked('-1')
                      }>
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
                              checked === index.toString() + indexn.toString()
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
