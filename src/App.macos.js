import React from 'react';
import { View } from 'react-native';
import { Router } from '@reach/router';
import '../platformAssets/runtime/fontManager';
import WelcomeScreen from './screens/WelcomeScreen';
import ChatScreen from './screens/ChatScreen';
import AuthScreen from './screens/AuthScreen';
import { ProvideAuth } from './utils/auth';
// Entry for MacOS
const App = () => (
    <ProvideAuth>
        <Router>
            <WelcomeScreen path="/" />
            <ChatScreen path="chat" />
            <AuthScreen path="auth" />
        </Router>
    </ProvideAuth>
);
export default App;
