import firebase from 'firebase/app'
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBz0Gcowcc7RBRL_cU2nGK2AlcIabDOk1A",
    authDomain: "csi-website-70421.firebaseapp.com",
    databaseURL: "https://csi-website-70421.firebaseio.com",
    projectId: "csi-website-70421",
    storageBucket: "csi-website-70421.appspot.com",
    messagingSenderId: "891913750521",
    appId: "1:891913750521:web:4c3ebf32efceaa8908df28"
  }

// Initialize Firebase
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
}

const fireDb = firebase.firestore()
export { fireDb }