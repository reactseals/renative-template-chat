import { updateMessages } from '../../../utils/EventHandler';

class CustomProvider {
    constructor(instance) {
        this.instance = instance;
        this.messages = [];
        this.listenForMessages();
    }

    listenForMessages = () => {
        // Here you should implement your own state update logic,
        // and call updateMessages when you want to update
        //setTimeout(() => {
        //    updateMessages(this.messages);
        //}, 100);
    };

    getMessages = async () => {
        this.messages?.push({ msg: 'firstMsgTest', nickname: 'nicks', email: 'emailas' });
        let reversedArray = [...this.messages];
        return reversedArray.reverse();
    };
    sendMessage = (nickname, email, message) => {
        this.messages?.push({ msg: message, nickname: nickname, email: email });
        let reversedArray = [...this.messages];
        updateMessages(reversedArray.reverse());
    };
}

export default CustomProvider;
