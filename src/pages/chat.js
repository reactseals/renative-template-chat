import React from 'react';
import { useRouter } from 'next/router';
import ChatScreen from '../ChatScreenNew';

const Chat = () => (
    <ChatScreen router={useRouter()} headerHeight={1000} nickname="poggers" email="spoopers" />
);

export default Chat;
