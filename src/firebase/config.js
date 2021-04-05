import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCd8DT1EISD91cD50lCwntkUXOAFI8yMkY",
  authDomain: "rrshopdb.firebaseapp.com",
  databaseURL: "https://rrshopdb.firebaseio.com",
  projectId: "rrshopdb",
  storageBucket: "rrshopdb.appspot.com",
  messagingSenderId: "784713141278",
  appId: "1:784713141278:web:c0bddfcc7af958bb5ef20f",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
const fireStore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

export const GoogleSignIn = () => {
  auth.signInWithPopup(provider);
};

export const createUserProfile = async (userAuth) => {
  if (userAuth) {
    const userRef = fireStore.doc(`user/${userAuth.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
      const {displayName, email} = userAuth;
      try {
        userRef.set({
          displayName,
          email,
        });
      } catch (err) {
        console.log(err);
      }
    }
  }
};
