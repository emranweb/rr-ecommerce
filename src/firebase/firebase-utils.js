import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


const config = {
    apiKey: "AIzaSyCd8DT1EISD91cD50lCwntkUXOAFI8yMkY",
    authDomain: "rrshopdb.firebaseapp.com",
    databaseURL: "https://rrshopdb.firebaseio.com",
    projectId: "rrshopdb",
    storageBucket: "rrshopdb.appspot.com",
    messagingSenderId: "784713141278",
    appId: "1:784713141278:web:c0bddfcc7af958bb5ef20f"
  };

  firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
const fbProvider = new firebase.auth.FacebookAuthProvider();

provider.setCustomParameters({prompt:"select_account"});
fbProvider.setCustomParameters({'display': 'popup'});

export const signInWithFb = ()=>auth.signInWithPopup(fbProvider);
export const signInWithGoogle = ()=> auth.signInWithRedirect(provider);

 export default firebase;


