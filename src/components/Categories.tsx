import React from 'react';
import {ScrollView, View} from 'react-native';
import {Category} from './Category';
import "../api/DatabaseHandler";
import { DatabaseHandler } from '../api/DatabaseHandler';
import { useUserData } from '../states/useData';


const Categories = () => {
  const userData = useUserData();
  return (
    <View>
      <ScrollView horizontal>
        {userData.userdata.courseList.map((category) => (
          <Category key={category.courseId} category={category} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;