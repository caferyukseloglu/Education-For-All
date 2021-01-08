//Main React import
import React from 'react';
import {
  useTheme,
  Appbar,
  Button,
  Card,
  Text,
  IconButton,
} from 'react-native-paper';
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
import {color} from 'react-native-reanimated';
import {useUserData} from '../../../states/useData';

const CourseDetailScreen = ({route, navigation}) => {
  const {colors} = useTheme();
  const windowWidth = useWindowDimensions().width;
  console.log("in coursedetailscreen");
  const {courseDetails, courseTeacher,lessonList} = route.params;
  console.log(courseDetails);
  console.log(lessonList);
  const userData = useUserData(); //Global state instance gets from https://github.com/pmndrs/zustand

  const enrollCourse = () => {
    userData.userdata.studentCourseEnroll(
      userData.userdata.getUser(),
      courseTeacher,
      courseDetails,
      function () {
        console.log('Done');
      },
    );
  };

  
  return (
    <SafeAreaView style={{flex: 1}}>
      <Appbar
        style={{backgroundColor: colors.surface, justifyContent: 'center'}}>
        <Appbar.Header
          style={{
            backgroundColor: colors.surface,
            justifyContent: 'space-between',
            width: windowWidth,
          }}>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Action onPress={() => enrollCourse()} icon="bookmark" />
        </Appbar.Header>
      </Appbar>
      <Scroll>
        <Body paddings="20px" style={{backgroundColor: colors.background}}>
          <View>
            <View style={{paddingBottom: 10}}>
              <CourseTitle margins="0px" style={{color: colors.title1}}>
                {courseDetails.getCourseName()}
              </CourseTitle>
              <CourseSubtitle margins="0px" style={{color: colors.subtitle1}}>
                {courseTeacher.getName() + ' ' + courseTeacher.getSurname()}
              </CourseSubtitle>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Card style={{width: windowWidth - 50}}>
                <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
              </Card>
            </View>
            <HeadText margins="10px 0px" style={{color: colors.text}}>
              {courseDetails.getCourseDescription()}
            </HeadText>
            <HeadText
              margins="10px 0px"
              style={{fontWeight: 'bold', color: colors.title1}}>
              Course Details
            </HeadText>
            <PopView
              style={{alignItems: 'center', justifyContent: 'space-between'}}>
              <View style={{alignItems: 'center', flexDirection: 'row'}}>
                <Avatar2 />
                <LessonView>
                  <Lesson style={{color: colors.title1}}>Lesson 1</Lesson>
                  <Teacher style={{color: colors.accent}}>T. Cafer </Teacher>
                  <Duration style={{color: colors.success}}>
                    Duration: 5 Min{' '}
                  </Duration>
                </LessonView>
                <Button onPress={() => navigation.navigate('ExamAddScreen')}>
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
                <Duration style={{color: colors.success}}>
                  Duration: 5 Min{' '}
                </Duration>
              </LessonView>
            </PopView>
            <PopView>
              <Avatar2 />
              <LessonView>
                <Lesson style={{color: colors.title1}}>Lesson 1</Lesson>
                <Teacher style={{color: colors.accent}}>T. Cafer </Teacher>
                <Duration style={{color: colors.success}}>
                  Duration: 5 Min{' '}
                </Duration>
              </LessonView>
            </PopView>
            <PopView>
              <Avatar2 />
              <LessonView>
                <Lesson style={{color: colors.title1}}>Lesson 1</Lesson>
                <Teacher style={{color: colors.accent}}>T. Cafer </Teacher>
                <Duration style={{color: colors.success}}>
                  Duration: 5 Min{' '}
                </Duration>
              </LessonView>
            </PopView>
          </View>
        </Body>
      </Scroll>
    </SafeAreaView>
  );
};

export default CourseDetailScreen;
