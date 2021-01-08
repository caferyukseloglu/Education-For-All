//Main React import
import React, {useState} from 'react';
import {
  useTheme,
  Appbar,
  Button,
  Card,
  Text,
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
  Bottom,
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
import {TouchableHighlight, useWindowDimensions, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {color} from 'react-native-reanimated';
import {useUserData} from '../../../states/useData';
import DropDownPicker from 'react-native-dropdown-picker';

const CourseDetailScreen = ({route, navigation}) => {
  const [visible, setVisible] = React.useState(false);
  const [examVisible, setExamVisible] = React.useState(false);

  const windowHeight = useWindowDimensions().height;
  const windowWidth = useWindowDimensions().width;

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const [data, setData] = React.useState({
    courseName: '',
    courseDescription: '',
    courseCategory: '',
  });
  const [placeholder, setPlaceholder] = React.useState({
    title: 'Create A Exam',
    input1: 'Exam Name',
    input2: 'Exam Description',
  });
  const onPickerChange = (name) => {
    if (name === 'exam') {
      setPlaceholder({
        ...placeholder,
        title: 'Create A Exam',
        input1: 'Exam Name',
        input2: 'Exam Description',
      });
      setExamVisible(true);
    } else {
      setPlaceholder({
        ...placeholder,
        title: 'Create A Lesson',
        input1: 'Lesson Name',
        input2: 'Lesson Description',
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
  const {courseDetails, teacher} = route.params;
  const userData = useUserData(); //Global state instance gets from https://github.com/pmndrs/zustand

  const enrollCourse = () => {
    userData.userdata.studentCourseEnroll(
      userData.userdata.getUser(),
      courseDetails,
      function () {
        console.log('Done');
      },
    );
  };

  const [questions, setQuestions] = useState([]);

  function addAnswer(index){
    const copyQuestions = questions;
    copyQuestions[index].answers = [...copyQuestions[index].answers, {title: '', correct: false}];
    setQuestions([...copyQuestions]);
  }

  function deleteQuestion(index){
    questions.slice(index, 1);
    setQuestions([...questions]);
    console.log(questions);
  }

  function deleteAnswer(index, answerindex){
    questions[index].answers.slice(answerindex, 1);
    setQuestions([...questions]);
  }

  function changeQuestion(index, text){
    questions[index].name = text;
    setQuestions([...questions]);
  }

  function changeAnswerText(index, answerindex, text){
    questions[index].answers[answerindex].title = text;
    setQuestions([...questions]);
  }

  function changeTrueAnswer(index, answerindex){
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
              <Scroll style={{backgroundColor:'white',height: windowHeight}}>
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
                    <View style={{marginTop:30}}>
                      <CourseTitle margins="10px 0px">Exam</CourseTitle>
                      <View>
                        {questions.map((question, index) => {
                          return (
                            <React.Fragment>
                              <CourseTitle margins="10px 0px">Question</CourseTitle>
                              <TextInput
                                style={{marginBottom:5}}
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
                              <CourseTitle margins="10px 0px">Answers</CourseTitle>
                              {question.answers.map((answer, answerindex) => {
                                return (
                                  <TextInput
                                    style={{marginBottom:5}}
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
                                        name={data.secureTextEntry ? 'checkbox-blank-circle-outline' : 'checkbox-marked-circle'}
                                        color="black"
                                        onPress={() => changeTrueAnswer(index,answerindex)}
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
                              <Button style={{color:'black',marginTop:8}} mode="contained" onPress={() => addAnswer(index)}>Add Answer</Button>
                            </React.Fragment>
                          );
                        })}
                        <IconButton icon="plus-circle" color="black" style={{alignSelf:'center'}} onPress={() => addQuestion()} />
                      </View>
                    </View>
                  ) : undefined}
                  <View style={{marginVertical: 30}}>
                    <Button onPress={() => userData.userdata.addExam(teacher,courseDetails,questions,data.courseName,data.courseDescription)}>Submit</Button>
                  </View>
                </Body>
              </Scroll>
            </Modal>
          </Portal>
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
        </Body>
      </Scroll>
    </SafeAreaView>
  );
};

export default CourseDetailScreen;
