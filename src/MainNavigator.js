import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';
import WelcomeScreen from './screens/WelcomeScreen/WelcomeScreen';
import ChatScreen from './screens/ChatScreen/index.mobile';
import colors from '../platformAssets/runtime/colors.json';
import AuthScreen from './screens/AuthScreen/AuthScreen';

const Stack = createStackNavigator();

const globalScreenOptions = {
    headerBackground: greyHeaderBackground,
    headerTintColor: colors.textColor,
    headerTitleStyle: {
        textAlign: 'center',
        flexGrow: 1,
    },
};

const MainNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="welcome"
            component={WelcomeScreen}
            options={{
                title: 'Welcome',
                ...globalScreenOptions,
            }}
        />
        <Stack.Screen
            name="auth"
            component={AuthScreen}
            options={{
                title: 'Log in',
                ...globalScreenOptions,
            }}
        />
        <Stack.Screen
            name="chat"
            component={ChatScreen}
            options={{
                title: 'Chat',
                ...globalScreenOptions,
            }}
        />
    </Stack.Navigator>
);
const greyHeaderBackground = () => (
    <LinearGradient
        colors={[colors.activeColorSecondary, colors.backgroundColor]}
        style={{ flex: 1 }}
    />
);

export default MainNavigator;
