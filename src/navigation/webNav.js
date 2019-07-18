import { createSwitchNavigator } from '@react-navigation/core';
import { createBrowserApp } from '@react-navigation/web';
import WelcomeScreen from '../screens/welcome';
import ChatScreen from '../screens/chat';

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
