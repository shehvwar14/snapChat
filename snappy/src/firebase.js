import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCypIc_9OPYcc0ycRt8xKVi8DHzmVl9XRo",
    authDomain: "snapchat-55ff4.firebaseapp.com",
    projectId: "snapchat-55ff4",
    storageBucket: "snapchat-55ff4.appspot.com",
    messagingSenderId: "271460515958",
    appId: "1:271460515958:web:c767cde93ba62bd6e69f57",
    measurementId: "G-HNTB56W1N8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();
  const providers = new firebase.auth.PhoneAuthProvider();

  export {db, auth, storage, provider, providers};

