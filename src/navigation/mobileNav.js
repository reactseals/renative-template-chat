import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import { View, Image } from 'react-native';
import HomeScreen from '../screenHome';
import WelcomeGreyScreen from '../welcomeGrey';
import ChatGreyScreen from '../chatGrey';
import WelcomeLightBlueScreen from '../welcomeLightBlue';
import ChatLightBlueScreen from '../chatLightBlue';
import WelcomeLightGreenScreen from '../welcomeLightGreen';
import ChatLightGreenScreen from '../chatLightGreen';
import colors from '../themes/greyTheme/colors';

const greyHeaderBackground = (
  <LinearGradient
    colors={[colors.activeColorTertiary, colors.backgroundColor]}
    style={{ flex: 1 }}
  />
);


const AppNavigator = createStackNavigator(
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
    WelcomeLightBlue: {
      screen: WelcomeLightBlueScreen,
    },
    ChatLightBlue: {
      screen: ChatLightBlueScreen,
    },
    WelcomeLightGreen: {
      screen: WelcomeLightGreenScreen,
    },
    ChatLightGreen: {
      screen: ChatLightGreenScreen,
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

export default createAppContainer(AppNavigator);
