import React from 'react';
import Chat from '../../components/ChatComponent';
import useRouter from '../../utils/Router/useRouter';
import useModel from './useModel';

const ChatScreen = (props) => {
    const router = useRouter(props);
    //to do: get from useAuth
    const { nickname, email } = router.params;
    const chatProps = useModel();
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Chat nickname={nickname} email={email} {...chatProps} />;
};

export default ChatScreen;
