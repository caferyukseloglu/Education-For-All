import React from 'react';
import {View} from 'react-native';
import {Card, Avatar} from 'react-native-paper';
import {CategoryText} from '../styles/text';

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
    <View style={{marginLeft: 20, alignItems: 'center', marginTop: 10}}>
      <Card
        style={{
          width: 200,
          height: 150,
          borderRadius: 110 / 2,
          backgroundColor,
        }}>
        <Card.Content>
          <Avatar.Image
            style={{marginLeft: 30, alignItems: 'center', marginTop: 12}}
            source={require('../assets/ava11.png')}
            size={110}
          />
        </Card.Content>
      </Card>
      <CategoryText textAlign="center">{title}</CategoryText>
      <CategoryText textAlign="center">
        8.5{' '}
        <Avatar.Icon
          size={24}
          icon="star"
          style={{backgroundColor: 'rgba(0,0,0,0)'}}
          color="#FFCE31"
        />
        <Avatar.Icon
          size={24}
          icon="star"
          style={{backgroundColor: 'rgba(0,0,0,0)'}}
          color="#FFCE31"
        />
        <Avatar.Icon
          size={24}
          icon="star"
          style={{backgroundColor: 'rgba(0,0,0,0)'}}
          color="#FFCE31"
        />
        <Avatar.Icon
          size={24}
          icon="star"
          style={{backgroundColor: 'rgba(0,0,0,0)'}}
          color="#FFCE31"
        />
      </CategoryText>
    </View>
  );
};
