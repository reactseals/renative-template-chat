import firebase from '../../../initializeApp';
import { updateMessages } from '../../../utils/eventHandler';

const chatroom = firebase.database().ref().child('chatrooms').child('global');

class FirebaseProvider {
    constructor(instance) {
        this.instance = instance;
        this.listenForMessages();
    }

    getMessages = async () => {
        const messages = await chatroom.once('value');
        if (messages.exists()) {
            return this.toArray(messages.val());
        }

        return [];
    };

    sendMessage = (nickname, email, message) => {
        chatroom.push({
            nickname,
            email,
            msg: message,
        });
    };

    listenForMessages = () => {
        chatroom.on('value', (snap) => {
            if (snap.val()) {
                updateMessages(this.toArray(snap.val()));
            }
        });
    };

    toArray = (firebaseRes) => {
        // turns firebase response JSON to an array
        return Object.keys(firebaseRes)
            .map((id) => {
                return { uuid: id, ...firebaseRes[id] };
            })
            .reverse();
    };
}

export default FirebaseProvider;
