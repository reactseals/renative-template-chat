import React from 'react';
import { Router } from '@reach/router';
import '../platformAssets/runtime/fontManager';
import WelcomeScreen from './screens/WelcomeScreen';
import ChatScreen from './screens/ChatScreen';
import AuthScreen from './screens/AuthScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProvideAuth from './AuthContext';

// Entry for MacOS
const App = () => (
    <ProvideAuth>
        <Router>
            <WelcomeScreen path="/" />
            <ChatScreen path="chat" />
            <AuthScreen path="auth" />
            <RegisterScreen path="register" />
        </Router>
    </ProvideAuth>
);
export default App;
