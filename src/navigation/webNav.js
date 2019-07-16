import React from 'react';
import { createSwitchNavigator } from '@react-navigation/core';
import { createBrowserApp } from '@react-navigation/web';
import WelcomeScreen from '../screens/web/welcome';
import ChatScreen from '../screens/web/chat';

const AppNavigator = createSwitchNavigator(
  {
    Welcome: {
      screen: WelcomeScreen,
      navigationOptions: {
        title: 'Welcome',
      },
    },
    Chat: {
      screen: ChatScreen,
      navigationOptions: {
        title: 'Chat',
      },
    },
  },
  {
    initialRouteName: 'Welcome',
    defaultNavigationOptions: {
      headerBackTitle: null,
    },
  },
);

export default createBrowserApp(AppNavigator);
