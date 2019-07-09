import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import HomeScreen from '../screenHome';
import WelcomeDarkGreyScreen from '../screens/mobile/welcomeDarkGrey';
import ChatDarkGreyScreen from '../screens/mobile/chatDarkGrey';
// import WelcomeLightBlueScreen from '../screens/mobile/welcomeLightBlue';
// import ChatLightBlueScreen from '../screens/mobile/chatLightBlue';
import greyColors from '../themes/darkGreyThemeMobile/colors';

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

export default createAppContainer(AppNavigator);
