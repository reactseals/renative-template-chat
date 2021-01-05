import { listenForMessages } from '../../utils/EventHandler';

class Provider {
    constructor(instance) {
        this.instance = instance;
    }

    getMessages = async () => this.instance.getMessages();
    sendMessage = (nickname, email, message) => this.instance.sendMessage(nickname, email, message);
    onMessage = (callback) => {
        this.listener = listenForMessages(callback);
    };
}

export default Provider;
