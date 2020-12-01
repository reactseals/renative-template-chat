import React from 'react';
import { navigate } from '@reach/router';
import Chat from '../../components/ChatWithFirebase';

const ChatScreen = ({ location }) => {
    const { nickname, email } = location.state;
    return <Chat navigate={navigate} headerHeight={1000} nickname={nickname} email={email} />;
};

export default ChatScreen;
