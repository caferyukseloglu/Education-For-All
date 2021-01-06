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
import { useUserData } from '../../../states/useData';

/*const userData = useUserData(); //Global state instance gets from https://github.com/pmndrs/zustand*/
/*const [teachers, setTeachers] = React.useState([]);

useEffect(() => {
  userData.userdata.setTeachers(function () {
    userData.userdata.getTeachers().forEach((teacher) => {
      setCategories((teachers) => [...teachers, teacher.getCategoryName()]);
    });
  });
});
*/


const HeadofCategory = {
  exampleData: [
    {name: 'Ayhan R.', color: '#FFCE31'},
    {name: 'Ahmet Y.', color: '#2D9CDB'},
    {name: 'Mehmet Ö.', color: '#EB5757'},
    {name: 'Salim B.', color: '#BB6BD9'},
    {name: 'Kerim U.', color: '#F2C94C'},
    {name: 'Igor Y.', color: '#6FCF97'},
  ],
};
const CourseScreen = ({route,navigation}) => {
  const {colors} = useTheme();
  const userData = useUserData(); //Global state instance gets from https://github.com/pmndrs/zustand
  const {courseObj} = route.params;

  const [courses, setCourseObjects] = React.useState([]);

  /*useEffect(()=>{
    userData.userdata.getSingleCategoryCourses(courseObj,function(){
      courseObj.getCourses().forEach((uniqueCourse)=>{
          console.log("callback called");
          setCourseObjects((courses) => [
            ...courses,
            uniqueCourse,
          ]);
      })
    })
  })*/

  

  return (
    <SafeAreaView style={{flex: 1}}>
      <Appbar>
        <Appbar.Header>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Content title={<Title>{courseObj.getCategoryName()}</Title>} style={{flex: 0}} />
        </Appbar.Header>
      </Appbar>
      <Scroll>
        <Body>
          <View>
            <SubTitle>
              {courseObj.getCategoryDescription()}
            </SubTitle>
            <HeadText style={{fontWeight: 'bold'}}>Teachers</HeadText>
            <FlatList
              horizontal
              data={HeadofCategory.exampleData}
              renderItem={({item, index}) => (
                <TouchableHighlight
                  onPress={console.log(
                    "() => navigation.navigate('Teacher Data')",
                  )}
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
                    <HPCardsyText>{item.name}</HPCardsyText>
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
                <Button onPress={() => navigation.navigate('Exam')}>Take Exam</Button>
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
