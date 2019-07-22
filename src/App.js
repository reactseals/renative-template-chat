import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import WelcomeScreen from './WelcomeScreen';
import ChatScreen from './ChatScreen';
import colors from '../platformAssets/runtime/colors';
import '../platformAssets/runtime/fontManager';


const greyHeaderBackground = (
    <LinearGradient
        colors={[colors.activeColorSecondary, colors.backgroundColor]}
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
                headerTintColor: colors.textColor,
            },
        },
        Chat: {
            screen: ChatScreen,
            navigationOptions: {
                headerBackground: greyHeaderBackground,
                title: 'Chat',
                headerTintColor: colors.textColor,
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
