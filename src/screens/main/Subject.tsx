//Main React import
import React, {useState} from 'react';
import {
  TouchableRipple,
  IconButton,
  Badge,
  Portal,
  Modal,
  Text,
  TextInput,
} from 'react-native-paper';
//Our Styles for Project
import {Body} from '../../styles/wrapper';
import {
  SubTitle,
  Title,
  CardTitle,
  CardSubtitle,
  LessonTitle,
  LessonSubtitle,
  CourseTitle,
  CourseSubtitle,
  RecomTitle,
  RecomInfo,
} from '../../styles/text';
import DropDownPicker from 'react-native-dropdown-picker';
import {View, FlatList, useWindowDimensions, StyleSheet} from 'react-native';
import {SubjectCard} from '../../styles/cards';
import {useUserData} from '../../states/useData';
import {TouchableHighlight} from 'react-native';
import { Course } from '../../api/Course';


const SubjectScreen = ({navigation}) => {
  const [visible, setVisible] = React.useState(false);
  const windowHeight = useWindowDimensions().height;
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: 'white',
    padding: 20,
    height: windowHeight,
  };

  const [data] = useState({
    time: '15',
    subjects: ['Global', 'English', 'Physics', 'Turkish', 'German'],
    completedTopicCount: 1,
    cards: {
      Test: 'General subject information',
      'Topic Summary': 'Study notes',
    },
    cardIcons: {Test: 'bookmark-plus', 'Topic Summary': 'grease-pencil'},
  });

  const [courses] = useState([
    {name: 'Programming 101', key: '1', description: 8},
    {name: 'Fun Mathematic', key: '2', description: 9},
    {name: 'Physics', key: '3', description: 7},
    {name: 'Microprocessors', key: '4', description: 5},
    {name: 'Programming 101', key: '5', description: 8},
    {name: 'Fun Mathematic', key: '6', description: 9},
    {name: 'Physics', key: '7', description: 7},
    {name: 'Database', key: '8', description: 5},
  ]);

  const userData = useUserData(); //Global state instance gets from https://github.com/pmndrs/zustand

  if (userData.userdata.getUser().getUserType() === 1) {
    return (
      <Body>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 5}}>
            <CourseTitle>Subjects</CourseTitle>
            <CourseSubtitle>
              Today's lesson progress {data.time} min
            </CourseSubtitle>
          </View>
          <View style={{flex: 1}}>
            <IconButton
              style={{marginTop: 20}}
              icon="square-edit-outline"
              size={25}
              color="black"
              onPress={() => console.log('Edit')}
            />
          </View>
        </View>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 15,
            alignItems: 'center',
          }}>
          {Object.keys(data.cards).map((eachCard) => (
            <SubjectCard key={eachCard}>
              <IconButton icon="bookmark-plus" size={30} color="green" />
              <CardTitle>{eachCard}</CardTitle>
              <CardSubtitle>{data.cards[eachCard]}</CardSubtitle>
            </SubjectCard>
          ))}
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: '#CACACA',
            height: '100%',
            paddingHorizontal: 20,
            padding: 20,
          }}>
          <View>
            <RecomTitle>Recommended lessons</RecomTitle>
            <RecomInfo>
              You recently completed {data.completedTopicCount} topic.
            </RecomInfo>
          </View>
          <FlatList
            data={courses}
            renderItem={({item}) => (
              <TouchableRipple
                style={{marginBottom: 20}}
                onPress={() => navigation.navigate('Course')}
                rippleColor="black">
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{
                      flex: 2,
                      height: 82,
                      backgroundColor: 'white',
                      justifyContent: 'space-between',
                    }}>
                    <IconButton icon="plus-circle" size={40} color="#F2C94C" />
                  </View>
                  <View style={{flex: 5, height: 82, backgroundColor: 'white'}}>
                    <LessonTitle>{item.name}</LessonTitle>
                    <LessonSubtitle>
                      {item.description} goals were achieved today.
                    </LessonSubtitle>
                  </View>
                  <View
                    style={{
                      flex: 3,
                      height: 82,
                      backgroundColor: 'white',
                      justifyContent: 'center',
                    }}>
                    <Badge
                      style={{backgroundColor: 'green', marginRight: 50}}
                      visible={true}
                      size={20}>
                      New
                    </Badge>
                  </View>
                </View>
              </TouchableRipple>
            )}
          />
        </View>
      </Body>
    );
  } else {
    return (
      <Body>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 5}}>
            <CourseTitle>Subjects</CourseTitle>
            <CourseSubtitle>
              Today's lesson progress {data.time} min
            </CourseSubtitle>
          </View>
          <View style={{flex: 1}}>
            <IconButton
              style={{marginTop: 20}}
              icon="plus-box"
              size={25}
              color="black"
              onPress={showModal}
            />
          </View>
        </View>
        <Portal>
          <Modal visible={visible} contentContainerStyle={containerStyle}>
            <Body>
              <IconButton
                style={{alignSelf: 'flex-end'}}
                icon="close"
                onPress={hideModal}
              />
              <ModalCourse />
            </Body>
          </Modal>
        </Portal>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 15,
            alignItems: 'center',
          }}>
          {Object.keys(data.cards).map((eachCard) => (
            <SubjectCard key={eachCard}>
              <IconButton icon="bookmark-plus" size={30} color="green" />
              <CardTitle>{eachCard}</CardTitle>
              <CardSubtitle>{data.cards[eachCard]}</CardSubtitle>
            </SubjectCard>
          ))}
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: '#CACACA',
            height: '100%',
            paddingHorizontal: 20,
            padding: 20,
          }}>
          <View>
            <RecomTitle>Recommended lessons</RecomTitle>
            <RecomInfo>
              You recently completed {data.completedTopicCount} topic.
            </RecomInfo>
          </View>
          <FlatList
            data={courses}
            renderItem={({item}) => (
              <TouchableRipple
                style={{marginBottom: 20}}
                onPress={() => navigation.navigate('Course')}
                rippleColor="black">
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{
                      flex: 2,
                      height: 82,
                      backgroundColor: 'white',
                      justifyContent: 'space-between',
                    }}>
                    <IconButton icon="plus-circle" size={40} color="#F2C94C" />
                  </View>
                  <View style={{flex: 5, height: 82, backgroundColor: 'white'}}>
                    <LessonTitle>{item.name}</LessonTitle>
                    <LessonSubtitle>
                      {item.description} goals were achieved today.
                    </LessonSubtitle>
                  </View>
                  <View
                    style={{
                      flex: 3,
                      height: 82,
                      backgroundColor: 'white',
                      justifyContent: 'center',
                    }}>
                    <Badge
                      style={{backgroundColor: 'green', marginRight: 50}}
                      visible={true}
                      size={20}>
                      New
                    </Badge>
                  </View>
                </View>
              </TouchableRipple>
            )}
          />
        </View>
      </Body>
    );
  }
};

const ModalCourse = ({navigation}) => {
  const [text, setText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [description, onChangeDescription] = React.useState('');
  const [courseName, onChangeCourseName] = React.useState('');
  const [selectedValue, setSelectedValue] = useState('Category...');
  const [checked, setChecked] = React.useState('first');
  const userData = useUserData(); //Global state instance gets from https://github.com/pmndrs/zustand

  const saveCourseandNavigate=()=>{
    const createdCourse: Course = new Course();
    createdCourse.setCourseName(courseName);
    createdCourse.setCourseCategory(selectedValue.label);
    createdCourse.setCourseDescription(description);
    userData.userdata.teachCourse(userData.userdata.getUser(),createdCourse);
    navigation.navigate('CourseDetails',{courseDetails:createdCourse,courseTeacher:userData.userdata.getUser()});
  } 

  return (
    <View>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>Add New Course</Text>

        <View>
          <Text>Course Name:</Text>
          <TextInput
            style={{
              height: 30,
              width: 300,
              borderColor: 'gray',
              borderWidth: 1,
            }}
            onChangeText={(text) => onChangeCourseName(text)}
            value={courseName}
            placeholder="  enter course name..."
            placeholderTextColor="lightgrey"
          />
        </View>
        <View>
          <Text>Course Description:</Text>
          <UselessTextInput
            multiline
            numberOfLines={2}
            onChangeText={(text) => onChangeDescription(text)}
            value={description}
          />
        </View>

        <View>
          <DropDownPicker
            placeholder="Select a category..."
            items={[
              {label: 'Mathematics', value: 'math'},
              {label: 'Chemistry', value: 'chem'},
              {label: 'Biology', value: 'bio'},
              {label: 'Physics', value: 'phys'},
              {label: 'Programming', value: 'code'},
              {label: 'English', value: 'EN'},
            ]}
            dropDownMaxHeight={70}
            containerStyle={{height: 70, width: 300}}
            onChangeItem={item=>setSelectedValue(item)}
          />
        </View>
        <View style={styles.row}>
          <TouchableHighlight
            style={{...styles.closeButton, backgroundColor: 'E5E5E5'}}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <Text style={styles.textStyle}>Cancel</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={{...styles.closeButton, backgroundColor: 'E5E5E5'}}
            onPress={() => {
              saveCourseandNavigate();
            }}>
            <Text style={styles.textStyle}>Save</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

const UselessTextInput = (props) => {
  return (
    <TextInput
      style={{height: 100, width: 300, borderColor: 'gray', borderWidth: 1}}
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      maxLength={140}
      placeholder="  enter course description..."
      placeholderTextColor="lightgrey"
    />
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 3.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  closeButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'left',
    alignItems: 'flex-start',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 0,
    marginTop: 70,
  },
});

export default SubjectScreen;
