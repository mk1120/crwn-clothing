import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDV5rMLvngc5ZSmIZXKnY-z45dEwDaRkW8",
  authDomain: "crwn-db-61987.firebaseapp.com",
  databaseURL: "https://crwn-db-61987.firebaseio.com",
  projectId: "crwn-db-61987",
  storageBucket: "crwn-db-61987.appspot.com",
  messagingSenderId: "932624106551",
  appId: "1:932624106551:web:4952e89d31d1c515d32bb2",
  measurementId: "G-7WH1TPDRHN",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
