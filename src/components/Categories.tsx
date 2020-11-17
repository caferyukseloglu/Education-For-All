import React from 'react';
import {ScrollView, View} from 'react-native';
import {Category} from './Category';

const categories = [
  {
    id: 'category',
    title: 'Category',
    color: '#FFCE31',
  },
  {
    id: 'Video Lessons',
    title: 'Video Lessons',
    color: '#2D9CDB',
  },
  {
    id: 'Free Lessons',
    title: 'Free Lessons',
    color: '#EB5757',
  },
  {
    id: 'Bookshelf',
    title: 'Bookshelf',
    color: '#BB6BD9',
  },
  {
    id: 'Live Lessons',
    title: 'Live Lessons',
    color: '#F2C94C',
  },
  {
    id: 'Leader Board',
    title: 'Leader Board',
    color: '#6FCF97',
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
