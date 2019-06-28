import React from 'react';
import { createSwitchNavigator } from '@react-navigation/core';
import { createBrowserApp } from '@react-navigation/web';
import LinearGradient from 'react-native-linear-gradient';
import HomeScreen from '../screenHome';
import WelcomeGreyScreen from '../welcomeGreyWeb';
import ChatGreyScreen from '../chatGreyWeb';
import colors from '../themes/greyTheme/colors';

const greyHeaderBackground = (
  <LinearGradient
    colors={[colors.activeColorTertiary, colors.backgroundColor]}
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
    WelcomeGrey: {
      screen: WelcomeGreyScreen,
      navigationOptions: {
        headerBackground: greyHeaderBackground,
        title: 'Welcome',
      },
    },
    ChatGrey: {
      screen: ChatGreyScreen,
      navigationOptions: {
        headerBackground: greyHeaderBackground,
        title: 'Chat',
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
