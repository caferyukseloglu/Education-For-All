import React from 'react';
import {ScrollView, View} from 'react-native';
import {Category} from './Category';

const categories = [
  {
    id: 'PHP Coding',
    title: 'PHP Coding',
    color: '#C4C4C4',
  },
  {
    id: 'Python Coding',
    title: 'Python Coding',
    color: '#C4C4C4',
  },
  {
    id: 'C++ Coding',
    title: 'C++ Coding',
    color: '#C4C4C4',
  },
  {
    id: 'C Coding',
    title: 'C Coding',
    color: '#C4C4C4',
  },
  {
    id: 'RN Coding',
    title: 'RN Coding',
    color: '#C4C4C4',
  },
];


const Categories = () => {
  return (
    <View>
      <ScrollView horizontal>
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;