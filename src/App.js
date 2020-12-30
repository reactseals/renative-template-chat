import 'react-native-gesture-handler';
import React from 'react';
import '../platformAssets/runtime/fontManager';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './MainNavigator';
import { ProvideAuth } from './utils/auth';

// Entry for mobile apps
export default function App() {
    return (
        <ProvideAuth>
            <NavigationContainer>
                <MainNavigator />
            </NavigationContainer>
        </ProvideAuth>
    );
}
