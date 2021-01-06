//Main React import
import React from 'react';
import {useTheme, Appbar, ProgressBar, Button} from 'react-native-paper';
//Our Styles for Project
import {
  Body,
  PopView,
  Avatar2,
  LessonView,
  Scroll,
  Start,
  Line,
} from '../../../styles/wrapper';
import {
  SubTitle,
  Title,
  HeadText,
  Lesson,
  Teacher,
  Duration,
  HPCardsyText,
} from '../../../styles/text';
import {
  View,
  TouchableOpacity,
  FlatList,
  TouchableHighlight,
  Text,
  useWindowDimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const ExamScreen = ({navigation}) => {
  const windowWidth = useWindowDimensions().width;
  const {colors} = useTheme();

  return (
    <SafeAreaView style={{flex: 1}}>
      <Start>
        <Line alignItems="center " justify="flex-start" style={{flexWrap:'nowrap'}}>
          <Button>X</Button>
          <ProgressBar progress={0.9} color={colors.warning} style={{width:windowWidth-200}}/>
        </Line>
      </Start>
      <Body>
        <Text>Test</Text>
      </Body>
    </SafeAreaView>
  );
};

export default ExamScreen;
