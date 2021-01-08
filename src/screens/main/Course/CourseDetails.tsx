//Main React import
import React, {useState, useEffect} from 'react';
import {
  useTheme,
  Appbar,
  Button,
  Card,
  IconButton,
  TextInput,
  Portal,
  Modal,
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
  HeadText,
  Lesson,
  Teacher,
  Duration,
  CourseTitle,
  CourseSubtitle,
} from '../../../styles/text';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useUserData} from '../../../states/useData';
import DropDownPicker from 'react-native-dropdown-picker';
import {FlatList, useWindowDimensions, View} from 'react-native';

const CourseDetailScreen = ({route, navigation}) => {
  const [visible, setVisible] = React.useState(false);
  const [examVisible, setExamVisible] = React.useState(false);

  const windowHeight = useWindowDimensions().height;
  const windowWidth = useWindowDimensions().width;

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const {courseDetails, teacher} = route.params;

  const userData = useUserData(); //Global state instance gets from https://github.com/pmndrs/zustand

  const [lessons, setLessons] = React.useState([]);
  useEffect(() => {
    userData.userdata.getLessonsForCourse(teacher, courseDetails, function () {
      courseDetails.getCourseLessons().forEach((lesson) => {
        setLessons((lessons) => [...lessons, {Type: 'Lesson', lesson}]);
      });
    });
  });

  const [exams, setExams] = React.useState([]);
  useEffect(() => {
    userData.userdata.getExamsForCourses(teacher, courseDetails, function () {
      courseDetails.getCourseExams().forEach((exam) => {
        setLessons((lessons) => [...lessons, {Type: 'Exam', exam}]);
      });
    });
  });

  console.log(lessons);

  const [data, setData] = React.useState({
    courseName: '',
    courseDescription: '',
    courseCategory: '',
    courseText: '',
  });
  const [placeholder, setPlaceholder] = React.useState({
    title: 'Create A Exam',
    input1: 'Exam Name',
    input2: 'Exam Description',
    value: '',
  });
  const onPickerChange = (name) => {
    if (name === 'exam') {
      setPlaceholder({
        ...placeholder,
        title: 'Create A Exam',
        input1: 'Exam Name',
        input2: 'Exam Description',
        value: 'exam',
      });
      setExamVisible(true);
    } else {
      setPlaceholder({
        ...placeholder,
        title: 'Create A Lesson',
        input1: 'Lesson Name',
        input2: 'Lesson Description',
        value: 'lesson',
      });
      setExamVisible(false);
    }
  };
  const eraseData = () => {
    setData({
      ...data,
      courseName: '',
      courseDescription: '',
      courseCategory: '',
    });
    hideModal();
  };
  const updateName = (name: string) => {
    setData({
      ...data,
      courseName: name,
    });
  };
  const updateDescription = (name: string) => {
    setData({
      ...data,
      courseDescription: name,
    });
  };
  const containerStyle = {
    backgroundColor: 'white',
    padding: 20,
    height: windowHeight,
  };

  const {colors} = useTheme();

  const enrollCourse = () => {
    console.log('ENROLL COURSE');
    console.log(teacher);
    userData.userdata.studentCourseEnroll(
      userData.userdata.getUser(),
      teacher.userID,
      courseDetails,
      function () {
        console.log('Done');
      },
    );
  };

  const [questions, setQuestions] = useState([]);

  function addAnswer(index) {
    const copyQuestions = questions;
    copyQuestions[index].answers = [
      ...copyQuestions[index].answers,
      {title: '', correct: false},
    ];
    setQuestions([...copyQuestions]);
  }

  const differentiateType = () => {
    if (placeholder.value === 'lesson') {
      userData.userdata.addLessonToCourse(
        teacher,
        courseDetails,
        data.courseName,
        data.courseDescription,
        data.courseText,
      );
    } else {
      userData.userdata.addExam(
        teacher,
        courseDetails,
        questions,
        data.courseName,
        data.courseDescription,
      );
    }
  };

  function deleteQuestion(index) {
    questions.splice(index, 1);
    setQuestions([...questions]);
    console.log(questions);
  }

  function deleteAnswer(index, answerindex) {
    questions[index].answers.splice(answerindex, 1);
    setQuestions([...questions]);
  }

  function changeQuestion(index, text) {
    questions[index].name = text;
    setQuestions([...questions]);
  }

  function changeAnswerText(index, answerindex, text) {
    questions[index].answers[answerindex].title = text;
    setQuestions([...questions]);
  }

  function changeTrueAnswer(index, answerindex) {
    const currentTrue = questions[index].answers.findIndex((answer) => {
      return !!answer.correct;
    });

    if (currentTrue !== -1) {
      questions[index].answers[currentTrue].correct = false;
    }
    questions[index].answers[answerindex].correct = true;

    setQuestions([...questions]);
  }

  function addQuestion() {
    setQuestions([...questions, {name: '', answers: []}]);
  }

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
                {teacher.name + ' ' + teacher.surname[0] + '.'}
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
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <HeadText
                margins="10px 0px"
                style={{fontWeight: 'bold', color: colors.title1}}>
                Course Details
              </HeadText>
              {userData.userdata.getUser().getUserType() === 2 ? (
                <IconButton
                  icon="plus-circle"
                  size={20}
                  color="black"
                  onPress={showModal}
                />
              ) : null}
            </View>
          </View>
          <Portal>
            <Modal visible={visible} contentContainerStyle={containerStyle}>
              <Scroll style={{backgroundColor: 'white', height: windowHeight}}>
                <Body>
                  <IconButton
                    style={{alignSelf: 'flex-end'}}
                    icon="close"
                    onPress={eraseData}
                  />
                  <CourseTitle margins="10px 0px">
                    {placeholder.title}
                  </CourseTitle>
                  <TextInput
                    style={{marginTop: 20}}
                    label={placeholder.input1}
                    value={data.courseName}
                    onChangeText={(val: any) => updateName(val)}
                  />
                  <TextInput
                    style={{marginTop: 20}}
                    label={placeholder.input2}
                    value={data.courseDescription}
                    onChangeText={(val: any) => updateDescription(val)}
                  />
                  <View>
                    <DropDownPicker
                      placeholder="Select a type..."
                      // eslint-disable-next-line react-native/no-inline-styles
                      items={[
                        {label: 'Exam', value: 'exam'},
                        {label: 'Lesson', value: 'lesson'},
                      ]}
                      placeholderStyle={{color: 'black'}}
                      labelStyle={{color: 'black'}}
                      dropDownMaxHeight={windowHeight / 6}
                      containerStyle={{height: 70, marginTop: 10}}
                      onChangeItem={(item) => onPickerChange(item.value)}
                    />
                  </View>
                  {examVisible ? (
                    <View style={{marginTop: 30}}>
                      <CourseTitle margins="10px 0px">Exam</CourseTitle>
                      <View>
                        {questions.map((question, index) => {
                          return (
                            <React.Fragment>
                              <CourseTitle margins="10px 0px">
                                Question
                              </CourseTitle>
                              <TextInput
                                style={{marginBottom: 5}}
                                placeholder="Enter Question..."
                                value={question.name}
                                left={
                                  <TextInput.Icon
                                    name="close"
                                    color="black"
                                    onPress={() => deleteQuestion(index)}
                                  />
                                }
                                onChangeText={(event) =>
                                  changeQuestion(index, event)
                                }
                                placeholderTextColor="lightgrey"
                              />
                              <CourseTitle margins="10px 0px">
                                Answers
                              </CourseTitle>
                              {question.answers.map((answer, answerindex) => {
                                return (
                                  <TextInput
                                    style={{marginBottom: 5}}
                                    placeholder="Enter Answer..."
                                    placeholderTextColor="lightgrey"
                                    left={
                                      <TextInput.Icon
                                        name="close"
                                        color="black"
                                        onPress={() =>
                                          deleteAnswer(index, answerindex)
                                        }
                                      />
                                    }
                                    right={
                                      <TextInput.Icon
                                        name={
                                          !questions[index]['answers'][
                                            answerindex
                                          ]['correct']
                                            ? 'checkbox-blank-circle-outline'
                                            : 'checkbox-marked-circle'
                                        }
                                        color="black"
                                        onPress={() =>
                                          changeTrueAnswer(index, answerindex)
                                        }
                                      />
                                    }
                                    onChangeText={(event) =>
                                      changeAnswerText(
                                        index,
                                        answerindex,
                                        event,
                                      )
                                    }
                                  />
                                );
                              })}
                              <Button
                                style={{color: 'black', marginTop: 8}}
                                mode="contained"
                                onPress={() => addAnswer(index)}>
                                Add Answer
                              </Button>
                            </React.Fragment>
                          );
                        })}
                        <IconButton
                          icon="plus-circle"
                          color="black"
                          style={{alignSelf: 'center'}}
                          onPress={() => addQuestion()}
                        />
                      </View>
                    </View>
                  ) : (
                    <View style={{marginVertical: 20}}>
                      <CourseTitle margins="10px 0px">Lesson</CourseTitle>
                      <TextInput
                        multiline={true}
                        style={{marginBottom: 5}}
                        placeholder="Enter Lesson Text..."
                        placeholderTextColor="lightgrey"
                        onChangeText={(event) => {
                          data.courseText = event;
                        }}
                      />
                    </View>
                  )}
                  <View style={{marginVertical: 30}}>
                    <Button onPress={() => differentiateType()}>Submit</Button>
                  </View>
                </Body>
              </Scroll>
            </Modal>
          </Portal>
          <FlatList
            data={lessons}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
              <PopView
                style={{alignItems: 'center', justifyContent: 'space-between'}}>
                <View style={{alignItems: 'center', flexDirection: 'row'}}>
                  <Avatar2 />
                  <LessonView>
                    <Lesson style={{color: colors.title1}}>
                      {item.lessonName}
                      {item.Type === 'Lesson'
                        ? item.lesson.lessonName
                        : item.exam.examName}
                    </Lesson>
                  </LessonView>
                </View>
                {console.log()}
                <IconButton
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{justifyContent: 'center'}}
                  icon="play-circle-outline"
                  onPress={() =>
                    item.Type === 'Lesson'
                      ? navigation.navigate('Exam', {
                          lessonType: 'lesson',
                          lessonContent: item.lesson,
                        })
                      : navigation.navigate('Exam', {
                          lessonType: 'exam',
                          lessonContent: item.exam,
                        })
                  }
                />
              </PopView>
            )}
          />
        </Body>
      </Scroll>
    </SafeAreaView>
  );
};

export default CourseDetailScreen;
