import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDj177s6g_TB8w0tI3DYnvuCI2ebelGWaY",
    authDomain: "react-app-e9c86.firebaseapp.com",
    projectId: "react-app-e9c86",
    storageBucket: "react-app-e9c86.appspot.com",
    messagingSenderId: "1028744129986",
    appId: "1:1028744129986:web:606343f13ddc2339463a5b"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //const app = initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db, 
      googleAuthProvider,
      firebase
  }