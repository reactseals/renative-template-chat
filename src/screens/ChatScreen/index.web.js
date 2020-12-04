import React from 'react';
import { useRouter } from 'next/router';
import Chat from '../../components/ChatWithFirebase';

const ChatScreen = () => {
    const router = useRouter();
    return <Chat router={router} nickname={router.query.nickname} email={router.query.email} />;
};

export default ChatScreen;
