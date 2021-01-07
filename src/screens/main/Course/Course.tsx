//Main React import
import React, {useEffect} from 'react';
import {useTheme, Appbar, Button} from 'react-native-paper';
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
} from '../../../styles/text';
import {
  View,
  TouchableOpacity,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useUserData} from '../../../states/useData';
import { Course } from '../../../api/Course';


const CourseScreen = ({route, navigation}) => {
  const {colors} = useTheme();
  const {courseObj,teachers} = route.params;

  const userData = useUserData(); //Global state instance gets from https://github.com/pmndrs/zustand
  const changeByUser = (teacher,course:Course) =>{
    console.log("Hello");
    userData.userdata.getCoursesOfTeacher(teacher,course,function(){
      console.log("done");
    })
  }
  

  return (
    <SafeAreaView style={{flex: 1}}>
      <Appbar>
        <Appbar.Header>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Content
            title={<Title>{courseObj.getCategoryName()}</Title>}
            style={{flex: 0}}
          />
        </Appbar.Header>
      </Appbar>
      <Scroll>
        <Body>
          <View>
            <SubTitle>{courseObj.getCategoryDescription()}</SubTitle>
            <HeadText style={{fontWeight: 'bold'}}>Teachers</HeadText>
            <FlatList
              horizontal
              data={teachers}
              renderItem={({item, index}) => (
                <TouchableHighlight
                  onPress={()=> changeByUser(item,courseObj)}
                  underlayColor="white">
                  <View>
                    <View
                      // eslint-disable-next-line react-native/no-inline-styles
                      style={{
                        backgroundColor: '#2D9CDB',
                        marginLeft: 15,
                        alignItems: 'center',
                        marginTop: 10,
                        height: 60,
                        width: 60,
                        borderRadius: 60 / 2,
                      }}
                    />
                    <HPCardsyText>{item.name+" "+item.surname[0]+"."}</HPCardsyText>
                  </View>
                </TouchableHighlight>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
            <HeadText style={{fontWeight: 'bold'}}>Courses</HeadText>
            <PopView>
              <Avatar2 />
              <LessonView>
                <Lesson>Math 101</Lesson>
                <Teacher>T. Cafer</Teacher>
                <Duration>Duration: 5 Min</Duration>
                <Button onPress={() => navigation.navigate('Exam')}>
                  Take Exam
                </Button>
              </LessonView>
            </PopView>
            <PopView>
              <Avatar2 />
              <LessonView>
                <Lesson>Math 102</Lesson>
                <Teacher> T. Cafer </Teacher>
                <Duration>Duration: 5 Min </Duration>
              </LessonView>
            </PopView>
            <PopView>
              <Avatar2 />
              <LessonView>
                <Lesson>Math 103</Lesson>
                <Teacher> T. Cafer </Teacher>
                <Duration>Duration: 5 Min </Duration>
              </LessonView>
            </PopView>
            <PopView>
              <Avatar2 />
              <LessonView>
                <Lesson>Math 104</Lesson>
                <Teacher> T. Cafer </Teacher>
                <Duration>Duration: 5 Min </Duration>
              </LessonView>
            </PopView>
          </View>
        </Body>
      </Scroll>
    </SafeAreaView>
  );
};

export default CourseScreen;
