import React from 'react';
import {BottomNavigation} from 'react-native-paper';
import MainScreen from './Main';
import SubjectScreen from './Subject';

export const BottomTabs = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'main', title: 'Home', icon: 'home'},
    {key: 'subjects', title: 'Courses', icon: 'book'},
  ]);
  const renderScene = BottomNavigation.SceneMap({
    main: MainScreen,
    subjects: SubjectScreen,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};
