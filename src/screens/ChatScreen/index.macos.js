import React from 'react';
import { navigate } from '@reach/router';
import Chat from '../../components/ChatComponent';

const ChatScreen = ({ location }) => {
    const { nickname, email } = location.state;
    return <Chat navigate={navigate} headerHeight={1000} nickname={nickname} email={email} />;
    // macos doesnt work properly for now
};

export default ChatScreen;
