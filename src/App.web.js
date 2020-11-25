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
import React from 'react';
import { useRouter } from 'next/router';
//import ScreenHome from '../components/screenHome';
import { View, Text} from 'react-native';

const App = () => (
    
    <View><Text>MACOS RUNS HERE{/* <ScreenHome router={useRouter()} /> */}</Text></View>
);
export default App;