import database from '@react-native-firebase/database';
import { EventRegister } from 'react-native-event-listeners';

const chatRoom = database().ref('/chatrooms/global');

class FirebaseProvider {
    constructor(instance) {
        this.instance = instance;
        this.listenForMessages();
    }

    listenForMessages = () => {
        chatRoom.on('value', (snap) => {
            if (snap.val()) {
                console.log('whups');
                EventRegister.emit('message', this.toArray(snap));
            }
        });
    };

    toArray = (firebaseRes) => {
        // turns firebase response JSON to an array
        let keys = firebaseRes._snapshot.childKeys;
        let data = firebaseRes.val();
        return keys.map((id) => {
            return { uuid: id, ...data[id] };
        });
    };

    getMessages = async () => {
        const messages = await chatRoom.once('value');
        if (messages.exists()) {
            return this.toArray(messages);
        }

        return [];
    };
    sendMessage = (nickname, email, message) => {
        chatRoom.push({
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
