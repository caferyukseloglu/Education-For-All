/**
 * Education React Native App
 * https://github.com/samuhay/mobile-project
 * @Cafer Yükseloğlu
 */

//For the Navigation
import 'react-native-gesture-handler';
import React from 'react';
import {useTheme} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';
import CourseScreen from '../screens/main/Course/Course';
import {SafeAreaView} from 'react-native-safe-area-context';
import MainScreen from '../screens/main/Main';
import ExamScreen from '../screens/main/Course/Exam';
import CourseDetailScreen from '../screens/main/Course/CourseDetails';
import FinalScreen from '../screens/main/Course/Final';
const Stack = createStackNavigator();

export const categoryStackNavigator = () => {
  const theme = useTheme();
  return (
    <SafeAreaView
      mode="padding"
      // eslint-disable-next-line react-native/no-inline-styles
      style={{flex: 1, backgroundColor: theme.colors.background}}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          cardStyle: {backgroundColor: theme.colors.background},
        }}>
        <Stack.Screen
          name="Home"
          component={MainScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Course"
          component={CourseScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CourseDetails"
          component={CourseDetailScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Exam"
          component={ExamScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Final"
          component={FinalScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};
