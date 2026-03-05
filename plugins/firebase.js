import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxEz3yuTKF7dmGWNQGHzIz4sieAPFV6GY",
  authDomain: "csi-web3-resources.firebaseapp.com",
  databaseURL: "https://csi-web3-resources-default-rtdb.firebaseio.com",
  projectId: "csi-web3-resources",
  storageBucket: "csi-web3-resources.appspot.com",
  messagingSenderId: "569732863480",
  appId: "1:569732863480:web:bdfdea53ed5d7afbaaf20d",
  measurementId: "G-HNE5XD0V2E"
};


const fireDb = initializeApp(firebaseConfig);
export { fireDb }
