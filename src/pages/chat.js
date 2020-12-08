import React from 'react';
import { useRouter } from 'next/router';
import ChatScreen from '../screens/ChatScreen';

const Chat = () => <ChatScreen router={useRouter()} />;

export default Chat;
