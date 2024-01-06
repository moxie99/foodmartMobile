/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  AccountScreen,
  BookmarkScreen,
  CartScreen,
  HomeScreen,
} from '../screens';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import CommIcon from 'react-native-vector-icons/MaterialCommunityIcons';
export type TabScreenParamList = {
  Home: undefined;
  Bookmark: undefined;
  Cart: undefined;
  Account: undefined;
};
const Tab = createBottomTabNavigator<TabScreenParamList>();

const TabNavigator = (props: any) => {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: '#0080ff',
        tabBarInactiveTintColor: '#D3D3D3',
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Home') {
            return (
              <MaterialIcon
                name="sports-football"
                size={30}
                color={focused ? '#0080ff' : '#D3D3D3'}
              />
            );
          } else if (route.name === 'Bookmark') {
            return (
              <CommIcon
                name="cpu-64-bit"
                size={30}
                color={focused ? '#0080ff' : '#D3D3D3'}
              />
            );
          } else if (route.name === 'Cart') {
            return (
              <Ionicons
                name="fitness"
                size={30}
                color={focused ? '#0080ff' : '#D3D3D3'}
              />
            );
          } else if (route.name === 'Account') {
            return (
              <CommIcon
                name="finance"
                size={30}
                color={focused ? '#0080ff' : '#D3D3D3'}
              />
            );
          }
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Bookmark" component={BookmarkScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
