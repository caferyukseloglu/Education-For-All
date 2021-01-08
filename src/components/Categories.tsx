import React from 'react';
import {ScrollView, View} from 'react-native';
import {Category} from './Category';
import '../api/DatabaseHandler';
import {useUserData} from '../states/useData';
import {useEffect} from 'react';

const Categories = () => {
  const userData = useUserData(); //Global state instance gets from https://github.com/pmndrs/zustand

  const [courses, setCourseObjects] = React.useState([]);
  useEffect(() => {
    userData.userdata.setCourses(function () {
      userData.userdata.getCourses().forEach((course) => {
        setCourseObjects((courses) => [...courses, course]);
      });
    });
  }, []);

  return (
    <View>
      <ScrollView horizontal>
        {courses.map((course) => (
          <Category key={course.categoryName} category={course} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;
