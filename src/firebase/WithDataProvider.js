import React, { useState, useEffect } from 'react';
import DataProvider from '../utils/data/index';

const WithDataProvider = (Component) => (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [messages, setMessages] = useState(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        DataProvider.getMessages().then((msgs) => setMessages(msgs));
        DataProvider.on('message', (msgs) => {
            setMessages(msgs);
        });
    }, []);
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component messages={messages} sendMessage={DataProvider.sendMessage} {...props} />;
};
export default WithDataProvider;
