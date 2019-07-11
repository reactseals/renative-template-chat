import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import HomeScreen from '../screenHome';
import WelcomeDarkGreyScreen from '../screens/mobile/welcomeDarkGrey';
import ChatDarkGreyScreen from '../screens/mobile/chatDarkGrey';
import WelcomeLightBlueScreen from '../screens/mobile/welcomeLightBlue';
import ChatLightBlueScreen from '../screens/mobile/chatLighBlue';
import WelcomeLightGreenScreen from '../screens/mobile/welcomeLightGreen';
import ChatLightGreenScreen from '../screens/mobile/chatLighGreen';
import darkGreyColors from '../themes/colors/darkGreyColors';
import lightBlueColors from '../themes/colors/lightBlueColors';
import lightGreenColors from '../themes/colors/lightGreenColors';

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

const greenHeaderBackground = (
  <LinearGradient
    colors={[lightGreenColors.activeColorSecondary, lightGreenColors.backgroundColor, lightGreenColors.backgroundColor]}
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
        headerTintColor: lightBlueColors.activeColorPrimary,
      },
    },
    ChatLightBlue: {
      screen: ChatLightBlueScreen,
      navigationOptions: {
        headerBackground: blueHeaderBackground,
        title: 'Chat',
        headerTintColor: lightBlueColors.activeColorPrimary,
      },
    },
    WelcomeLightGreen: {
      screen: WelcomeLightGreenScreen,
      navigationOptions: {
        headerBackground: greenHeaderBackground,
        title: 'Welcome',
        headerTintColor: lightGreenColors.activeColorPrimary,
      },
    },
    ChatLightGreen: {
      screen: ChatLightGreenScreen,
      navigationOptions: {
        headerBackground: greenHeaderBackground,
        title: 'Chat',
        headerTintColor: lightGreenColors.activeColorPrimary,
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

export default createAppContainer(AppNavigator);
