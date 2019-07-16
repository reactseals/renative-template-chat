import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import WelcomeScreen from '../screens/mobile/welcome';
import ChatScreen from '../screens/mobile/chat';
import darkGreyColors from '../themes/colors/darkGreyColors';


const greyHeaderBackground = (
  <LinearGradient
    colors={[darkGreyColors.activeColorTertiary, darkGreyColors.backgroundColor]}
    style={{ flex: 1 }}
  />
);

const AppNavigator = createStackNavigator(
  {
    Welcome: {
      screen: WelcomeScreen,
      navigationOptions: {
        headerBackground: greyHeaderBackground,
        title: 'Welcome',
        headerTintColor: darkGreyColors.textColor,
      },
    },
    Chat: {
      screen: ChatScreen,
      navigationOptions: {
        headerBackground: greyHeaderBackground,
        title: 'Chat',
        headerTintColor: darkGreyColors.textColor,
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

export default createAppContainer(AppNavigator);
