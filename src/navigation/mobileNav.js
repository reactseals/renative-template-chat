import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import HomeScreen from '../screenHome';
import WelcomeGreyScreen from '../screens/mobile/welcomeGrey';
import ChatGreyScreen from '../screens/mobile/chatGrey';
import greyColors from '../themes/greyTheme/colors';

const greyHeaderBackground = (
  <LinearGradient
    colors={[greyColors.activeColorTertiary, greyColors.backgroundColor]}
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
        headerTintColor: greyColors.textColor,
      },
    },
    ChatGrey: {
      screen: ChatGreyScreen,
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

export default createAppContainer(AppNavigator);
