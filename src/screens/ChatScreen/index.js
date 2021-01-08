import React from 'react';
import Chat from '../../components/ChatComponent';
import useModel from './useModel';
import { useAuth } from '../../AuthContext';

const ChatScreen = () => {
    const auth = useAuth();
    const { displayName, email } = auth.user;
    const chatProps = useModel();
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Chat nickname={displayName} email={email} {...chatProps} />;
};

export default ChatScreen;
