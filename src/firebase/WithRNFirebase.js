import React, { useState, useEffect } from 'react';
import database from '@react-native-firebase/database';

const WithRNFirebase = (Component) => (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [messages, setMessages] = useState(null);
    // Database name
    console.log(database().ref('/chatrooms/global'));
    const chatRoom = database().ref('/chatrooms/global');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        // Event listener, fires on mount and on every new message
        /*         chatRoom.on('value', getNewMessages);
        return () => {
            chatRoom.off('value', getNewMessages);
        }; */
    }, []);

    // Send a message to the firebase realtime database
    const sendMessage = (nickname, email, message) => {
        chatRoom.push({
            nickname,
            email,
            msg: message,
        });
    };
    // This fires everytime there's an update in the data
    const getNewMessages = (snap) => {
        // Update state if not null
        if (snap.val()) {
            setMessages(snap.val());
        }
    };
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component messages={messages} sendMessage={sendMessage} {...props} />;
};
export default WithRNFirebase;
