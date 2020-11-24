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
export const createUserProfileDocument = async (userAuth, additionalData) => {

    if (!userAuth) return
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if (!snapShot.exists) {
        const { displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}


export const auth = firebase.auth();
export const firestore = firebase.firestore(); 

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' }); 
export const signInWithGoogle = () => auth.signInWithPopup(provider); //these above some lines cannot be found in google
export default firebase;