import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';
import WelcomeScreen from './screens/WelcomeScreen';
import ChatScreen from './screens/ChatScreen';
import colors from '../platformAssets/runtime/colors.json';
import AuthScreen from './screens/AuthScreen';
import RegisterScreen from './screens/RegisterScreen';

const Stack = createStackNavigator();

const greyHeaderBackground = () => (
    <LinearGradient
        colors={[colors.activeColorSecondary, colors.backgroundColor]}
        style={{ flex: 1 }}
    />
);

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
            name="register"
            component={RegisterScreen}
            options={{
                title: 'Register',
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

export default MainNavigator;
