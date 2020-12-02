import React from 'react';
import { useRouter } from 'next/router';
import WelcomeScreen from '../screens/WelcomeScreen/WelcomeScreen';

// Entry for next engine based web
const App = () => <WelcomeScreen router={useRouter()} />;

export default App;
