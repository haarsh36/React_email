import firebase from "firebase"
const firebaseConfig = {
  apiKey: "AIzaSyAC4mUPJGylWVK-dkqTJp6MqdiMusLWo_E",
  authDomain: "harsh-f87a2.firebaseapp.com",
  projectId: "harsh-f87a2",
  storageBucket: "harsh-f87a2.appspot.com",
  messagingSenderId: "1035711358860",
  appId: "1:1035711358860:web:89f0d21c50c14b085ad8a9"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export { db , auth, provider}