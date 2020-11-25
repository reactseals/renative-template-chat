import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './WelcomeScreen';
import ChatScreen from './ChatScreen';
import colors from '../platformAssets/runtime/colors';
import LinearGradient from 'react-native-linear-gradient';

const Stack = createStackNavigator();

const greyHeaderBackground = () =>
    <LinearGradient
        colors={[colors.activeColorSecondary, colors.backgroundColor]}
        style={{ flex: 1 }}
    />

const MainNavigator = () => {
    return (
    <Stack.Navigator>
        <Stack.Screen name="welcome" component={WelcomeScreen} options={{
                headerBackground: greyHeaderBackground,
                title: 'Welcome',
                headerTintColor: colors.textColor,
                headerTitleStyle: {
                    textAlign: 'center',
                    flexGrow: 1,
                },
            }} />
        <Stack.Screen name="chat" component={ChatScreen} options={{
                headerBackground: greyHeaderBackground,
                title: 'Chat',
                headerTintColor: colors.textColor,
                headerTitleStyle: {
                    textAlign: 'center',
                    flexGrow: 1,
                },
                
            }} />
      </Stack.Navigator>
    )
}

export default MainNavigator
