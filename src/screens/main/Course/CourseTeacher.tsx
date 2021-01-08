//Main React import
import React, {useEffect} from 'react';
import {useTheme, Appbar, Button, IconButton} from 'react-native-paper';
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
  HPCardsyText,
  CourseTitle,
  CourseSubtitle,
} from '../../../styles/text';
import {
  View,
  FlatList,
  TouchableHighlight,
  useWindowDimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useUserData} from '../../../states/useData';
import {Course} from '../../../api/Course';

const CourseScreen = ({route, navigation}) => {
  const windowWidth = useWindowDimensions().width;
  const {colors} = useTheme();
  const {courseObj, teachers} = route.params;

  const [courses, setCourses] = React.useState([]);

  const userData = useUserData(); //Global state instance gets from https://github.com/pmndrs/zustand
  
  userData.userdata.getCoursesOfTeacher(userData.userdata.getUser(), courseObj, function () {
    userData.userdata.getUser().getCoursesGiven().forEach((course) => {
      setCourses((courses) => [...courses, course]);
    });
  });


  console.log(courses);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Appbar>
        <Appbar.Header
          style={{width: windowWidth, justifyContent: 'space-between'}}>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
        </Appbar.Header>
      </Appbar>
      <Scroll>
        <Body paddings="20px" style={{backgroundColor: colors.background}}>
          <View>
            <View style={{paddingBottom: 10}}>
              <CourseTitle margins="0px" style={{color: colors.title1}}>
                {courseObj.getCategoryName()}
              </CourseTitle>
              <CourseSubtitle margins="0px" style={{color: colors.subtitle1}}>
                {courseObj.getCategoryDescription()}
              </CourseSubtitle>
            </View>
            <HeadText
              margins="10px 0px"
              style={{fontWeight: 'bold', color: colors.title1}}>
              Courses
            </HeadText>
            <FlatList
              data={courses}
              renderItem={({item, index}) => (
                <PopView
                  style={{
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{alignItems: 'center', flexDirection: 'row'}}>
                    <Avatar2 />
                    <LessonView>
                      <Lesson style={{color: colors.title1}}>
                        {item.getCourseName()}
                      </Lesson>
                      <Teacher style={{color: colors.accent}}>
                        {userData.userdata.getUser().getName() + ' ' + userData.userdata.getUser().getSurname()}
                      </Teacher>
                    </LessonView>
                  </View>
                  <IconButton
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{justifyContent: 'center'}}
                    icon="play-circle-outline"
                    onPress={() =>
                      navigation.navigate('CourseDetails', {
                        courseDetails: item,
                        courseTeacher: teacher,
                      })
                    }
                  />
                </PopView>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </Body>
      </Scroll>
    </SafeAreaView>
  );
};

export default CourseScreen;
