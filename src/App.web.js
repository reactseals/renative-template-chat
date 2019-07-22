import { createSwitchNavigator } from '@react-navigation/core';
import { createBrowserApp } from '@react-navigation/web';
import WelcomeScreen from './WelcomeScreen';
import ChatScreen from './ChatScreen';
import '../platformAssets/runtime/fontManager';

const AppNavigator = createSwitchNavigator(
    {
        Welcome: {
            screen: WelcomeScreen,
            path: '',
            navigationOptions: {
                title: 'Welcome',
            },
        },
        Chat: {
            screen: ChatScreen,
            path: 'chat',
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
