import auth from '@react-native-firebase/auth';
import { EventRegister } from 'react-native-event-listeners';

class RNFirebaseAuthProvider {
    constructor(instance) {
        this.instance = instance;
        this.listenForAuthChange();
    }

    listenForAuthChange = () => {
        auth().onAuthStateChanged((usr) => {
            if (usr) {
                EventRegister.emit('authChange', usr);
            } else {
                EventRegister.emit('authChange', false);
            }
        });
    };

    signIn = async (email, password) => {
        let response = await auth().signInWithEmailAndPassword(email, password);
        return response.user;
    };

    signUp = async (email, password, username) => {
        let response = await auth().createUserWithEmailAndPassword(email, password);
        return response.user;
    };

    signOut = async () => {
        await auth().signOut();
        return false;
    };

    onAuthChange = (callback) => {
        this.listener = EventRegister.addEventListener('authChange', callback);
    };
}

export default RNFirebaseAuthProvider;
