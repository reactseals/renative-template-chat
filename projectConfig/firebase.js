import firebase from '@firebase/app'; // UN-COMMENT THIS ONCE CONFIGURED
// import firebase from './firebaseFake'; // REMOVE THIS ONCE CONFIGURED
import 'firebase/database';
import 'firebase/storage';

const config = {
    apiKey: 'AIzaSyDYbaUW5g8pG3_xaqKlnAdX-Vz2Gkm7lKs',
    authDomain: 'rnv-chat-template.firebaseapp.com',
    databaseURL: 'https://rnv-chat-template.firebaseio.com',
    projectId: 'rnv-chat-template',
    storageBucket: 'rnv-chat-template.appspot.com',
    messagingSenderId: '203089953823',
    appId: '1:203089953823:web:34f3bcd96ae7bc37',
};

firebase.initializeApp(config);


export default firebase;
