import React, { useState, useEffect } from 'react';
import DataProvider from '../../utils/data';

const useChatModel = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [messages, setMessages] = useState([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        DataProvider.getMessages().then((msgs) => setMessages(msgs));
        DataProvider.on('message', (msgs) => {
            setMessages(msgs);
        });
    }, []);
    // eslint-disable-next-line react/jsx-props-no-spreading
    return { messages, sendMessage: DataProvider.sendMessage };
};
export default useChatModel;
