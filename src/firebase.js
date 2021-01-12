import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCVpEbYVrHO2t6wxXoxZmsnhc6cmL3MD_4",
    authDomain: "my-food-menu-55e8d.firebaseapp.com",
    projectId: "my-food-menu-55e8d",
    storageBucket: "my-food-menu-55e8d.appspot.com",
    messagingSenderId: "183085226422",
    appId: "1:183085226422:web:7d3feb93c2285e9c460917",
    measurementId: "G-RNN8P05V5X"
  };

  
  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth=firebase.auth(); 
  const dataB=firebaseApp.database();

  export {db,auth,dataB}