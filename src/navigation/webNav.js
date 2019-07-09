import React from 'react';
import { createSwitchNavigator } from '@react-navigation/core';
import { createBrowserApp } from '@react-navigation/web';
import LinearGradient from 'react-native-linear-gradient';
import HomeScreen from '../screenHome';
import WelcomeDarkGreyScreen from '../screens/web/welcomeDarkGrey';
import ChatDarkGreyScreen from '../screens/web/chatDarkGrey';
import greyColors from '../themes/darkGreyThemeWeb/colors';

const greyHeaderBackground = (
  <LinearGradient
    colors={[greyColors.activeColorTertiary, greyColors.backgroundColor]}
    style={{ flex: 1 }}
  />
);

const AppNavigator = createSwitchNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerTransparent: true,
      },
    },
    WelcomeDarkGrey: {
      screen: WelcomeDarkGreyScreen,
      navigationOptions: {
        headerBackground: greyHeaderBackground,
        title: 'Welcome',
        headerTintColor: greyColors.textColor,
      },
    },
    ChatDarkGrey: {
      screen: ChatDarkGreyScreen,
      navigationOptions: {
        headerBackground: greyHeaderBackground,
        title: 'Chat',
        headerTintColor: greyColors.textColor,
      },
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerTintColor: '#EDF2F4',
      headerBackTitle: null,

    },
  },
);

export default createBrowserApp(AppNavigator);
