import React from 'react';
import { View } from 'react-native';
import { Router } from '@reach/router';
import WelcomeScreen from './WelcomeScreen';
import ChatScreen from './ChatScreen';

const App = () => (
    <View>
        <Router>
            <WelcomeScreen path="/" />
            <ChatScreen path="chat" />
        </Router>
    </View>
);
export default App;

/* import { createSwitchNavigator } from '@react-navigation/core';
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
 */
