import React from 'react';
import { useRouter } from 'next/router';
//import ScreenHome from '../components/screenHome';
import { View, Text} from 'react-native';
import WelcomeScreen from '../WelcomeScreen';
import ChatScreen from '../ChatScreen';

const App = () => (
    
    <View><Text><WelcomeScreen/>{/* <ScreenHome router={useRouter()} /> */}</Text></View>
);
export default App;