import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {BottomTabs} from './bottomNavigation';
import {useTheme} from 'react-native-paper';

import {DrawerContent} from './drawerContent';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  const theme = useTheme();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      drawerStyle={{backgroundColor: theme.colors.background}}>
      <Drawer.Screen
        name="Home"
        component={BottomTabs}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};
