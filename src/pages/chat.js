import React from 'react';
import { useRouter } from 'next/router';
import ChatScreen from '../components/ChatWithFirebase';

const Chat = () => {
    const router = useRouter();
    return (
        <ChatScreen
            router={useRouter()}
            nickname={router.query.nickname}
            email={router.query.email}
        />
    );
};

export default Chat;
