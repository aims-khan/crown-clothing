import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBb3Exi-rymOy17yTPckXuxnhfXhOQSa4k",
    authDomain: "crwn-db-f60e8.firebaseapp.com",
    databaseURL: "https://crwn-db-f60e8.firebaseio.com",
    projectId: "crwn-db-f60e8",
    storageBucket: "crwn-db-f60e8.appspot.com",
    messagingSenderId: "748861293984",
    appId: "1:748861293984:web:8e5e287021fff3ea50d0c5",
    measurementId: "G-Q4HRE5BYXZ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore(); 

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' }); 
export const signInWithGoogle = () => auth.signInWithPopup(provider); //these above some lines cannot be found in google
export default firebase;