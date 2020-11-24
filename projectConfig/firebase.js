import firebase from '@firebase/app'; // UN-COMMENT THIS ONCE CONFIGURED
// import firebase from './firebaseFake'; // REMOVE THIS ONCE CONFIGURED
import 'firebase/database';
import 'firebase/storage';

/* const config = {
    apiKey: '<your-api-key>',
    authDomain: '<your-auth-domain>',
    databaseURL: '<your-database-url>',
    projectId: '<your-cloud-firestore-project>',
    storageBucket: '<your-storage-bucket>',
    messagingSenderId: '<your-sender-id>',
    appId: '<your-app-id>',
};
 */
const config = {
    apiKey: "AIzaSyBe_QxdEBWOr7dJ-xLZuK1ceZCUULKNu0Q",
    authDomain: "rnv-template-chat.firebaseapp.com",
    databaseURL: "https://rnv-template-chat.firebaseio.com",
    projectId: "rnv-template-chat",
    storageBucket: "rnv-template-chat.appspot.com",
    messagingSenderId: "654798159212",
    appId: "1:654798159212:web:04e932e2e4cd42cc158749"
  };
firebase.initializeApp(config);

export default firebase;
