import React, { useState, useEffect } from 'react';
import firebase from '../../projectConfig/firebase';
import ChatComponent from './ChatComponent';

const ChatWithFirebase = (props) => {
    const [messages, setMessages] = useState(null);
    const chatRoom = firebase.database().ref().child('chatrooms').child('global');
    useEffect(() => {
        chatRoom.on('value', getNewMessages);
        return () => {
            chatRoom.off('value', getNewMessages);
        };
    }, []);

    // Send a message to the firebase realtime database
    const sendMessage = (nickname, email, message) => {
        chatRoom.push({
            nickname,
            email,
            msg: message,
        });
    };
    // Get new messages
    const getNewMessages = (snap) => {
        // Update state if not null
        if (snap.val()) {
            setMessages(snap.val());
        }
    };

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <ChatComponent messages={messages} sendMessage={sendMessage} {...props} />;
};

export default ChatWithFirebase;
