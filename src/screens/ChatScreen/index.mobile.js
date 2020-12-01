import React from 'react';
import Chat from '../../components/ChatWithFirebase';

const ChatScreen = ({ route, navigation }) => {
    const { nickname, email } = route.params;
    return <Chat navigation={navigation} nickname={nickname} email={email} />;
};

export default ChatScreen;
