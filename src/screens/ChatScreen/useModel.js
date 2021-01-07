import { useState, useEffect, useRef } from 'react';
import DataProvider from '../../data';

const useChatModel = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [messages, _setMessages] = useState([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const setMessages = (msgs) => {
        messagesRef.current = msgs;
        _setMessages(msgs);
    };
    const messagesRef = useRef(messages);

    useEffect(() => {
        DataProvider.getMessages().then((msgs) => setMessages(msgs));
        DataProvider.onMessage((msgs) => {
            setMessages([...msgs]);
        });
    }, []);
    // eslint-disable-next-line react/jsx-props-no-spreading
    // Make sure your messages are in correct order, the array will be rendered inverted, cause chat starts from the bottom
    return { messages, sendMessage: DataProvider.sendMessage };
};
export default useChatModel;
