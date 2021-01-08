import database from '@react-native-firebase/database';
import { updateMessages } from '../../../utils/EventHandler';

const chatRoom = database().ref('/chatrooms/global');

class FirebaseProvider {
    constructor(instance) {
        this.instance = instance;
        this.listenForMessages();
    }

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

    listenForMessages = () => {
        chatRoom.on('value', (snap) => {
            if (snap.val()) {
                updateMessages(this.toArray(snap));
            }
        });
    };

    toArray = (firebaseRes) => {
        // turns firebase response JSON to an array
        let keys = firebaseRes._snapshot.childKeys;
        keys.reverse();
        let data = firebaseRes.val();
        return keys.map((id) => {
            return { uuid: id, ...data[id] };
        });
    };
}

export default FirebaseProvider;
