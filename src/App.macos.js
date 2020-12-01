import React from 'react';
import { View } from 'react-native';
import { Router } from '@reach/router';
import WelcomeScreen from './WelcomeScreen';
import ChatScreen from './screens/ChatScreen/';
import AuthScreen from './AuthScreen';
// Entry for MacOS
const App = () => (
    <View>
        <Router>
            <WelcomeScreen path="/" />
            <ChatScreen path="chat" />
            <AuthScreen path="auth" />
        </Router>
    </View>
);
export default App;
