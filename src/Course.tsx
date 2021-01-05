//Main React import
import React, {useState} from 'react';
import {useTheme} from 'react-native-paper';
//Our Styles for Project
import {Body, PopView, Avatar2, LessonView} from './styles/wrapper';
import {
  SubTitle,
  Title,
  HeadText,
  Lesson,
  Teacher,
  Duration,
} from './styles/text';
import {View, ScrollView, StyleSheet, SafeAreaView} from 'react-native';
import {Card2} from './styles/cards';

const CourseScreen = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <Body>
      <View>
        <Title>Mathmatics</Title>
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
          <Lessonview>
            <Lesson> Lesson1 </Lesson>
            <Teacher> T. Cafer </Teacher>
            <Duration>Duration: 5 Min </Duration>
          </Lessonview>
        </PopView>
        <PopView>
          <Avatar2 />
          <Lessonview>
            <Lesson> Lesson1 </Lesson>
            <Teacher> T. Cafer </Teacher>
            <Duration>Duration: 5 Min </Duration>
          </Lessonview>
        </PopView>
        <PopView>
          <Avatar2 />
          <Lessonview>
            <Lesson> Lesson1 </Lesson>
            <Teacher> T. Cafer </Teacher>
            <Duration>Duration: 5 Min </Duration>
          </Lessonview>
        </PopView>
      </View>
    </Body>
  );
};

export default CourseScreen;
