import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {categoryStackNavigator} from './categoryStackNavigator';
import ProfileScreen from '../screens/main/Profile';
import SubjectScreen from '../screens/main/Subject';
import { IconButton } from 'react-native-paper';

export const BottomTabs = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;

          if (route.name === 'Main') {
            iconName = 'home';
          } else if (route.name === 'Bookmarks') {
            iconName = 'book';
          } else if (route.name === 'Profile') {
            iconName = 'account';
          }

          // You can return any component that you like here!
          return <IconButton icon={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'green',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Main" component={categoryStackNavigator} />
      <Tab.Screen name="Bookmarks" component={SubjectScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
