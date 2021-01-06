//Main React import
import React, {useEffect} from 'react';
import {useTheme} from 'react-native-paper';
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
import {View} from 'react-native';
import {useUserData} from '../../../states/useData';

const CourseScreen = ({route,navigation}) => {

  const {colors} = useTheme();

  const {courseObj} = route.params;
  console.log("Course OBJ IN: "+courseObj.getCourses());

  const userData = useUserData(); //Global state instance gets from https://github.com/pmndrs/zustand

  const [courses, setCourseObjects] = React.useState([]);

  useEffect(()=>{
    userData.userdata.getSingleCategoryCourses(courseObj,function(){
      courseObj.getCourses().forEach((uniqueCourse)=>{
          setCourseObjects((courses) => [
            ...courses,
            uniqueCourse,
          ]);
      })
    })
  })
  console.log(courseObj.getCourses().length);
  const courseList=()=>{
    return courseObj.getCourses().map(eachCourse=>{
      return(
        <PopView>
          <Avatar2 />
          <LessonView>
            <Lesson> {eachCourse.getCourseName()} </Lesson>
            <Teacher> {eachCourse.getCourseDescription()}</Teacher>
          </LessonView>
        </PopView>
      );
  })}
      
  return (
    <Body>
      <View>
        <Title>{courseObj.getCategoryName()}</Title>
        <SubTitle>{courseObj.getCategoryDescription()}</SubTitle>
        <HeadText style={{fontWeight: 'bold'}}>Introduction</HeadText>
        <HeadText style={{fontWeight: 'bold'}}>Lessons</HeadText>
        {courseList()}
      </View>
    </Body>
  );
};

export default CourseScreen;
