//Main React import
import React, {useState} from 'react';
import {TouchableRipple, IconButton, Badge} from 'react-native-paper';
//Our Styles for Project
import {Body} from './styles/wrapper';
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
} from './styles/text';
import {View, FlatList} from 'react-native';
import {SubjectCard} from './styles/cards';
import "./api/DatabaseHandler";
import { DatabaseHandler } from './api/DatabaseHandler';

const SubjectScreen = ({navigation}) => {
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

  return (
    <Body>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 5}}>
          <CourseTitle>Subjects</CourseTitle>
          <CourseSubtitle>Today's lesson progress {data.time} min</CourseSubtitle>
        </View>
        <View style={{flex: 1}}>
          <IconButton style={{marginTop:20}} icon="square-edit-outline" size={25} color="black" onPress={()=>console.log("Edit")}/>
        </View>
      </View>
      <View
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
          <RecomInfo>You recently completed {data.completedTopicCount} topic.</RecomInfo>
        </View>
        <FlatList
          data={courses}
          renderItem={({item}) => (
            <TouchableRipple
              style={{marginBottom: 20}}
              onPress={() => navigation.navigate('Course')}
              rippleColor="black">
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
};

export default SubjectScreen;
