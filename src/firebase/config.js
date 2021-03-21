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
    appId: "1:784713141278:web:c0bddfcc7af958bb5ef20f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

  const GoogleSignIn = ()=>{
      auth.signInWithPopup(provider)
  }


  export default GoogleSignIn;
  