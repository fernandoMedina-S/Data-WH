import { firebase, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // put your credentials here
  apiKey: "AIzaSyCgkqbpLAebo2IzlwyHD0djhbrEKcgsYyg",
  authDomain: "data-wh-79ee8.firebaseapp.com",
  projectId: "data-wh-79ee8",
  storageBucket: "data-wh-79ee8.appspot.com",
  messagingSenderId: "91023395556",
  appId: "1:91023395556:web:2ae689cfc27f17c0317af1",
  databaseURL: "https://data-wh-79ee8.firebaseio.com",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth(app);
