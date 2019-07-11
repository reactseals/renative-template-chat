import React from 'react';
import { createSwitchNavigator } from '@react-navigation/core';
import { createBrowserApp } from '@react-navigation/web';
import LinearGradient from 'react-native-linear-gradient';
import HomeScreen from '../screenHome';
import WelcomeDarkGreyScreen from '../screens/web/welcomeDarkGrey';
import ChatDarkGreyScreen from '../screens/web/chatDarkGrey';
import WelcomeLightBlueScreen from '../screens/web/welcomeLightBlue';
import ChatLightBlueScreen from '../screens/web/chatLightBlue';
import WelcomeLightGreenScreen from '../screens/web/welcomeLightGreen';
import ChatLightGreenScreen from '../screens/web/chatLightGreen';

const AppNavigator = createSwitchNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Home',
        headerTransparent: true,
      },
    },
    WelcomeDarkGrey: {
      screen: WelcomeDarkGreyScreen,
      navigationOptions: {
        title: 'Welcome',
      },
    },
    ChatDarkGrey: {
      screen: ChatDarkGreyScreen,
      navigationOptions: {
        title: 'Chat',
      },
    },
    WelcomeLightBlue: {
      screen: WelcomeLightBlueScreen,
      navigationOptions: {
        title: 'Welcome',
      },
    },
    ChatLightBlue: {
      screen: ChatLightBlueScreen,
      navigationOptions: {
        title: 'Chat',
      },
    },
    WelcomeLightGreen: {
      screen: WelcomeLightGreenScreen,
      navigationOptions: {
        title: 'Welcome',
      },
    },
    ChatLightGreen: {
      screen: ChatLightGreenScreen,
      navigationOptions: {
        title: 'Chat',
      },
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerBackTitle: null,
    },
  },
);

export default createBrowserApp(AppNavigator);
