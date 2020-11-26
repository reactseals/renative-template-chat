import 'react-native-gesture-handler';
import React from 'react';
import '../platformAssets/runtime/fontManager';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './MainNavigator';

// Entry for mobile apps
export default function App() {
    return (
        <NavigationContainer>
            <MainNavigator />
        </NavigationContainer>
    );
}
