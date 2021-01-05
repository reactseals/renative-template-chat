import auth from '@react-native-firebase/auth';
import { listenForAuthChange, removeEventListener, updateAuth } from '../../../utils/EventHandler';

class RNFirebaseAuthProvider {
    constructor(instance) {
        this.instance = instance;
        this.listenForAuthChange();
    }

    listenForAuthChange = () => {
        auth().onAuthStateChanged((usr) => {
            if (usr) {
                updateAuth(usr);
            } else {
                updateAuth(false);
            }
        });
    };

    signIn = async (email, password) => {
        let response = await auth().signInWithEmailAndPassword(email, password);
        return response.user;
    };

    signUp = async (email, password, username) => {
        let response = await auth().createUserWithEmailAndPassword(email, password);
        await response.user.updateProfile({
            displayName: username,
        });
        return response.user;
    };

    signOut = async () => {
        await auth().signOut();
        return false;
    };

    onAuthChange = (callback) => {
        this.listener = listenForAuthChange(callback);
    };
    offAuthChange = () => {
        removeEventListener(this.listener);
    };
}

export default new RNFirebaseAuthProvider();
