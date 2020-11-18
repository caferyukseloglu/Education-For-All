import React from 'react';
import {View} from 'react-native';
import { Card } from 'react-native-paper';
import {CategoryText} from '../styles/text';

const SIZE = 60;

interface CategoryProps {
  category: {
    id: string;
    color: string;
    title: string;
  };
}

export const Category = ({
  category: {color: backgroundColor, title},
}: CategoryProps) => {
  return (
    <View style={{marginLeft: 20, alignItems: 'center', marginTop:10}}>
      <Card
        style={{
          width: SIZE,
          height: SIZE,
          borderRadius: SIZE / 2,
          backgroundColor,
        }}
      />
      <CategoryText textAlign="center">{title}</CategoryText>
    </View>
  );
};
