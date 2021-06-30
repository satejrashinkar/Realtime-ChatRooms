import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAQs9w10R0BPnBG9Rjw0dD-e5fYX1CSUvA",
    authDomain: "whatsapp-clone-b655b.firebaseapp.com",
    projectId: "whatsapp-clone-b655b",
    storageBucket: "whatsapp-clone-b655b.appspot.com",
    messagingSenderId: "851981032364",
    appId: "1:851981032364:web:c45c46d6a3ee550b79b809"
  };

const firebaseApp =  firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;