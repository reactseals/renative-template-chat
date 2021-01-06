import firebase from '../../../initializeApp/firebase';
import { listenForAuthChange, removeEventListener, updateAuth } from '../../../utils/EventHandler';
import 'firebase/auth';

class FirebaseAuthProvider {
    constructor(instance) {
        this.instance = instance;
        this.listenForAuthChanges();
    }

    listenForAuthChanges = () => {
        firebase.auth().onAuthStateChanged((usr) => {
            if (usr) {
                updateAuth(usr);
            } else {
                updateAuth(false);
            }
        });
    };

    signIn = async (email, password) => {
        let response = await firebase.auth().signInWithEmailAndPassword(email, password);
        return response.user;
    };

    signUp = async (email, password, username) => {
        let response = await firebase.auth().createUserWithEmailAndPassword(email, password);
        await response.user.updateProfile({
            displayName: username,
        });
        return response.user;
    };

    signOut = async () => {
        await firebase.auth().signOut();
        return false;
    };

    onAuthChange = (callback) => {
        this.listener = listenForAuthChange(callback);
    };

    offAuthChange = () => {
        removeEventListener(this.listener);
    };
}

export default new FirebaseAuthProvider();
