import * as firebase from 'firebase';

  // Your app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDeEtBNd3ZDqvXUqJWLos6AkoMlx6OcK04",
    authDomain: "bloodbankapp-8d75d.firebaseapp.com",
    projectId: "bloodbankapp-8d75d",
    storageBucket: "bloodbankapp-8d75d.appspot.com",
    messagingSenderId: "925179332460",
    appId: "1:925179332460:web:cdbf8eab7742c9df265549",
    measurementId: "G-FQWTPPB4JB"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

export const firebaseAuth = firebaseApp.auth();  