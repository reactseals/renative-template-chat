import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import WelcomeScreen from './WelcomeScreen';
import ChatScreen from './ChatScreen';
import colors from '../platformAssets/runtime/colors';
import '../platformAssets/runtime/fontManager';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './MainNavigator';

//Entry for mobile apps
export default function App() {
    return (
      <NavigationContainer><MainNavigator/></NavigationContainer>
    );
  }
