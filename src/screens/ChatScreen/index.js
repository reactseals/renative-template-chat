import React from 'react';
import Chat from '../../components/ChatWithFirebase';
import useRouter from '../../utils/Router/useRouter';

const ChatScreen = (props) => {
    const router = useRouter(props);
    const { nickname, email } = router.params;
    return <Chat nickname={nickname} email={email} />;
};

export default ChatScreen;
