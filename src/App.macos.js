import React from 'react';
import { View } from 'react-native';
import { Router } from '@reach/router';
import WelcomeScreen from './screens/WelcomeScreen/WelcomeScreen';
import ChatScreen from './screens/ChatScreen/index.macos';
import AuthScreen from './screens/AuthScreen/AuthScreen';
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
