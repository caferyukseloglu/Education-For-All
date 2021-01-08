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
  const [checked, setChecked] = useState(0);
  return (
    <>
      <Text
        style={{
          paddingTop: 10,
          color: colors.title1,
          paddingHorizontal: 30,
          alignItems: 'center',
        }}>
        {console.log(exam,'Bura aşşağı')}
      </Text>
      <Body
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}>
        {exam.lesson.map((quest, index) => {
          <View key={index}>
            <Title>{console.log(quest.questionAnswers)}</Title>
            <TouchableRipple
              onPress={() => (checked != 1 ? setChecked(1) : setChecked(0))}>
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
                <Paragraph>Normal</Paragraph>
                <View pointerEvents="none">
                  <Checkbox status={checked === 1 ? 'checked' : 'unchecked'} />
                </View>
              </View>
            </TouchableRipple>
          </View>;
        })}
      </Body>
    </>
  );
};

export default ExamScreen;
