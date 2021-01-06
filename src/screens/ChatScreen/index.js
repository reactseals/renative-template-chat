import React from 'react';
import Chat from '../../components/ChatComponent';
import useModel from './useModel';
import { useAuth } from '../../context/auth';

const ChatScreen = (props) => {
    const auth = useAuth();
    const { displayName, email } = auth.user;
    const chatProps = useModel();
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Chat nickname={displayName} email={email} {...chatProps} />;
};

export default ChatScreen;
