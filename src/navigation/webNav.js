import React from 'react';
import { createSwitchNavigator } from '@react-navigation/core';
import { createBrowserApp } from '@react-navigation/web';
import LinearGradient from 'react-native-linear-gradient';
import HomeScreen from '../screenHome';
import WelcomeDarkGreyScreen from '../screens/web/welcomeDarkGrey';
import ChatDarkGreyScreen from '../screens/web/chatDarkGrey';
import WelcomeLightBlueScreen from '../screens/web/welcomeLightBlue';
import ChatLightBlueScreen from '../screens/web/chatLightBlue';
import darkGreyColors from '../themes/darkGreyThemeWeb/colors';
import lightBlueColors from '../themes/lightBlueThemeMobile/colors';

const greyHeaderBackground = (
  <LinearGradient
    colors={[darkGreyColors.activeColorTertiary, darkGreyColors.backgroundColor]}
    style={{ flex: 1 }}
  />
);

const blueHeaderBackground = (
  <LinearGradient
    colors={[lightBlueColors.activeColorSecondary, lightBlueColors.backgroundColor, lightBlueColors.backgroundColor]}
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
        headerTintColor: darkGreyColors.textColor,
      },
    },
    ChatDarkGrey: {
      screen: ChatDarkGreyScreen,
      navigationOptions: {
        headerBackground: greyHeaderBackground,
        title: 'Chat',
        headerTintColor: darkGreyColors.textColor,
      },
    },
    WelcomeLightBlue: {
      screen: WelcomeLightBlueScreen,
      navigationOptions: {
        headerBackground: blueHeaderBackground,
        title: 'Welcome',
        headerTintColor: lightBlueColors.inputTextColor,
      },
    },
    ChatLightBlue: {
      screen: ChatLightBlueScreen,
      navigationOptions: {
        headerBackground: blueHeaderBackground,
        title: 'Chat',
        headerTintColor: lightBlueColors.inputTextColor,
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
