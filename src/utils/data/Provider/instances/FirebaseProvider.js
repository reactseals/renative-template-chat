import firebase from '../../../../firebase/firebase';
import { EventRegister } from 'react-native-event-listeners';

const chatroom = firebase.database().ref().child('chatrooms').child('global');

class FirebaseProvider {
    constructor(instance) {
        this.instance = instance;
        this.listenForMessages();
    }

    listenForMessages = () => {
        chatroom.on('value', (snap) => {
            if (snap.val()) {
                EventRegister.emit('message', this.toArray(snap.val()));
            }
        });
    };

    toArray = (firebaseRes) => {
        // turns firebase response JSON to an array
        return Object.keys(firebaseRes).map((id) => {
            return { uuid: id, ...firebaseRes[id] };
        });
    };

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
    on = (event, callback) => {
        this.listener = EventRegister.addEventListener(event, callback);
    };
}

export default FirebaseProvider;
