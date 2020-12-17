// import firebase from '@firebase/app'; // UN-COMMENT THIS ONCE CONFIGURED
import firebase from './firebaseFake'; // REMOVE THIS ONCE CONFIGURED
import 'firebase/database';
import 'firebase/storage';

const config = {
    apiKey: '<your-api-key>',
    authDomain: '<your-auth-domain>',
    databaseURL: '<your-database-url>',
    projectId: '<your-cloud-firestore-project>',
    storageBucket: '<your-storage-bucket>',
    messagingSenderId: '<your-sender-id>',
    appId: '<your-app-id>',
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

export default firebase;
