import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBAEP4HK2-pI6gWojUns__uj-FN_Heybd0",
  authDomain: "ecommerce-5d5de.firebaseapp.com",
  projectId: "ecommerce-5d5de",
  storageBucket: "ecommerce-5d5de.appspot.com",
  messagingSenderId: "651825351383",
  appId: "1:651825351383:web:a626034009c059f0133e92"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
