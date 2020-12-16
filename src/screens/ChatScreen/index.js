import React from 'react';
import Chat from '../../components/ChatComponent';
import useRouter from '../../utils/Router/useRouter';
import useChatModel from './useChatModel';

const ChatScreen = (props) => {
    const router = useRouter(props);
    const { nickname, email } = router.params;
    const chatProps = useChatModel();
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Chat nickname={nickname} email={email} {...chatProps} />;
};

export default ChatScreen;
