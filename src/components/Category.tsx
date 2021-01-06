import React from 'react';
import {View, Image, Text} from 'react-native';
import {Card, Avatar} from 'react-native-paper';
import {CategoryText} from '../styles/text';
import { Line } from '../styles/wrapper';

interface CategoryProps {
  category: {
    courseId: number;
    courseName: string;
    courseDescription: string;
  };
}

export const Category = ({
  category: {courseName},
}: CategoryProps) => {
  return (
    <View style={{marginLeft: 20, alignItems: 'center', marginTop: 10}}>
      <Card
        style={{
          width: 200,
          height: 100,
          borderRadius: 10,
          backgroundColor:"#C4C4C4"
        }}>
        <Card.Content style={{justifyContent: 'center',alignItems:'center'}}>
          <Image source={require('../assets/ava11.png')} style={{width: 60,height: 80,resizeMode:'stretch'}}/>
        </Card.Content>
      </Card>
      <CategoryText textAlign="center">{courseName}</CategoryText>
      <Line justify="space-between">
        <Text style={{fontSize: 12, marginRight: 15}}>8.5</Text>
        <Avatar.Icon
          size={18}
          icon="star"
          style={{backgroundColor: 'rgba(0,0,0,0)'}}
          color="#FFCE31"
        />
        <Avatar.Icon
          size={18}
          icon="star"
          style={{backgroundColor: 'rgba(0,0,0,0)'}}
          color="#FFCE31"
        />
        <Avatar.Icon
          size={18}
          icon="star"
          style={{backgroundColor: 'rgba(0,0,0,0)'}}
          color="#FFCE31"
        />
        <Avatar.Icon
          size={18}
          icon="star"
          style={{backgroundColor: 'rgba(0,0,0,0)'}}
          color="#FFCE31"
        />
      </Line>
    </View>
  );
};
