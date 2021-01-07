//Main React import
import React from 'react';
import {useTheme, Appbar, Button, Card, Text, IconButton} from 'react-native-paper';
//Our Styles for Project
import {
  Body,
  PopView,
  Avatar2,
  LessonView,
  Scroll,
} from '../../../styles/wrapper';
import {
  SubTitle,
  Title,
  HeadText,
  Lesson,
  Teacher,
  Duration,
  CourseTitle,
  CourseSubtitle,
} from '../../../styles/text';
import {useWindowDimensions, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { color } from 'react-native-reanimated';

const CourseDetailScreen = ({navigation}) => {
  const {colors} = useTheme();
  const windowWidth = useWindowDimensions().width;

  return (
    <SafeAreaView style={{flex: 1}}>
      <Appbar style={{backgroundColor: colors.surface,justifyContent:'center'}}>
        <Appbar.Header style={{backgroundColor: colors.surface, justifyContent: 'space-between',width:windowWidth}}>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Action onPress={() => navigation.goBack()} icon="bookmark" />
        </Appbar.Header>
      </Appbar>
      <Scroll>
        <Body paddings="20px" style={{backgroundColor:colors.background}}>
          <View>
            <View style={{paddingBottom: 10}}>
              <CourseTitle margins="0px" style={{color: colors.title1}}>Mathematics 101</CourseTitle>
              <CourseSubtitle margins="0px" style={{color: colors.subtitle1}}>By Taha Kızmaz</CourseSubtitle>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Card style={{width: windowWidth - 50}}>
                <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
              </Card>
            </View>
            <HeadText margins="10px 0px" style={{color: colors.text}}>Mathematics Course 101 is the begining lesson for Mathematics</HeadText>
            <HeadText margins="10px 0px" style={{fontWeight: 'bold', color: colors.title1}}>Course Details</HeadText>
            <PopView style={{alignItems:'center',justifyContent:'space-between'}}>
              <View style={{alignItems: 'center',flexDirection: 'row'}}>
                <Avatar2 />
                <LessonView>
                  <Lesson style={{color: colors.title1}}>Lesson 1</Lesson>
                  <Teacher style={{color: colors.accent}}>T. Cafer </Teacher>
                  <Duration style={{color: colors.success}}>Duration: 5 Min </Duration>
                </LessonView>
                <Button onPress={() => navigation.navigate('Exam')}>
                  Take Exam
                </Button>
              </View>
              <IconButton
                // eslint-disable-next-line react-native/no-inline-styles
                style={{justifyContent: 'center'}}
                icon="play-circle-outline"
                onPress={() => navigation.navigate('CourseDetails')}
              />
            </PopView>
            <PopView>
              <Avatar2 />
              <LessonView>
                <Lesson style={{color: colors.title1}}>Lesson 1</Lesson>
                <Teacher style={{color: colors.accent}}>T. Cafer </Teacher>
                <Duration style={{color: colors.success}}>Duration: 5 Min </Duration>
              </LessonView>
            </PopView>
            <PopView>
              <Avatar2 />
              <LessonView>
                <Lesson style={{color: colors.title1}}>Lesson 1</Lesson>
                <Teacher style={{color: colors.accent}}>T. Cafer </Teacher>
                <Duration style={{color: colors.success}}>Duration: 5 Min </Duration>
              </LessonView>
            </PopView>
            <PopView>
              <Avatar2 />
              <LessonView>
                <Lesson style={{color: colors.title1}}>Lesson 1</Lesson>
                <Teacher style={{color: colors.accent}}>T. Cafer </Teacher>
                <Duration style={{color: colors.success}}>Duration: 5 Min </Duration>
              </LessonView>
            </PopView>
          </View>
        </Body>
      </Scroll>
    </SafeAreaView>
  );
};

export default CourseDetailScreen;
