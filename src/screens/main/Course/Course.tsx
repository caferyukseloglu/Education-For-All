//Main React import
import React from 'react';
import {useTheme, Appbar} from 'react-native-paper';
//Our Styles for Project
import {Body, PopView, Avatar2, LessonView} from '../../../styles/wrapper';
import {
  SubTitle,
  Title,
  HeadText,
  Lesson,
  Teacher,
  Duration,
} from '../../../styles/text';
import {View, TouchableOpacity} from 'react-native';

const CourseScreen = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <Body>
      <View>
        <Appbar>
          <Appbar.Header style={{flexDirection: 'row', display: 'flex'}}>
            <Appbar.BackAction onPress={() => navigation.goBack()} />
            <Appbar.Content title="Mathmatics" style={{flex: 0}} />
          </Appbar.Header>
        </Appbar>
        <SubTitle>
          Mathematics helps children make sense of the world around them and
          find meaning in the physical world.
        </SubTitle>
        <HeadText style={{fontWeight: 'bold'}}>Introduction</HeadText>
        <HeadText style={{fontWeight: 'bold'}}>Lessons</HeadText>
        <PopView>
          <Avatar2 />
          <LessonView>
            <Lesson> Lesson1 </Lesson>
            <Teacher> T. Cafer </Teacher>
            <Duration>Duration: 5 Min </Duration>
          </LessonView>
        </PopView>
        <PopView>
          <Avatar2 />
          <LessonView>
            <Lesson> Lesson1 </Lesson>
            <Teacher> T. Cafer </Teacher>
            <Duration>Duration: 5 Min </Duration>
          </LessonView>
        </PopView>
        <PopView>
          <Avatar2 />
          <LessonView>
            <Lesson> Lesson1 </Lesson>
            <Teacher> T. Cafer </Teacher>
            <Duration>Duration: 5 Min </Duration>
          </LessonView>
        </PopView>
        <PopView>
          <Avatar2 />
          <LessonView>
            <Lesson> Lesson1 </Lesson>
            <Teacher> T. Cafer </Teacher>
            <Duration>Duration: 5 Min </Duration>
          </LessonView>
        </PopView>
      </View>
    </Body>
  );
};

export default CourseScreen;
