import React from 'react'
import ChatScreen from '../ChatScreen';
import { useRouter } from 'next/router';

const Chat = () => {
    return (
        <ChatScreen router={useRouter()} headerHeight={1000}/>
    )
}

export default Chat
