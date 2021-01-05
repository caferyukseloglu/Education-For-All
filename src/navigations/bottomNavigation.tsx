import React from 'react';
import {BottomNavigation} from 'react-native-paper';
import {categoryStackNavigator} from '../navigations/categoryStackNavigator';
import ProfileScreen from '../screens/main/Profile';
import SubjectScreen from '../screens/main/Subject';

export const BottomTabs = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'main', title: 'Home', icon: 'home'},
    {key: 'subjects', title: 'Courses', icon: 'book'},
    {key: 'profile', title: 'Profile', icon: 'account'},
  ]);
  const renderScene = BottomNavigation.SceneMap({
    main: categoryStackNavigator,
    subjects: SubjectScreen,
    profile: ProfileScreen,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};
