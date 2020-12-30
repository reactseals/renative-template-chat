import firebase from '../../../../firebase/firebase';
import { EventRegister } from 'react-native-event-listeners';
import 'firebase/auth';

class FirebaseAuthProvider {
    constructor(instance) {
        this.instance = instance;
        this.listenForAuthChange();
    }

    listenForAuthChange = () => {
        firebase.auth().onAuthStateChanged((usr) => {
            if (usr) {
                EventRegister.emit('authChange', usr);
            } else {
                EventRegister.emit('authChange', false);
            }
        });
    };

    signIn = async (email, password) => {
        let response = await firebase.auth().signInWithEmailAndPassword(email, password);
        return response.user;
    };

    signUp = async (email, password, username) => {
        let response = await firebase.auth().createUserWithEmailAndPassword(email, password);
        return response.user;
    };

    signOut = async () => {
        await firebase.auth().signOut();
        return false;
    };

    onAuthChange = (callback) => {
        this.listener = EventRegister.addEventListener('authChange', callback);
    };
}

export default FirebaseAuthProvider;
