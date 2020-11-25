import React from 'react';
import { useRouter } from 'next/router';
//import ScreenHome from '../components/screenHome';
import { View, Text} from 'react-native';
import WelcomeScreen from '../WelcomeScreen';
import ChatScreen from '../ChatScreen';

//Entry for next engine based web
const App = () => (
    
    <WelcomeScreen router={useRouter()}/>
);
export default App;