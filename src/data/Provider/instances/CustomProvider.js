import { updateMessages } from '../../../utils/EventHandler';

class CustomProvider {
    constructor(instance) {
        this.instance = instance;
        this.messages = [];
        this.listenForMessages();
    }

    listenForMessages = () => {
        //setTimeout(() => {
        //    updateMessages(this.messages);
        //}, 100);
    };

    getMessages = async () => {
        this.messages?.push({ msg: 'firstMsgTest', nickname: 'nicks', email: 'emailas' });
        return this.messages;
    };
    sendMessage = (nickname, email, message) => {
        this.messages?.push({ msg: message, nickname: nickname, email: email });
        updateMessages(this.messages);
    };
}

export default CustomProvider;
