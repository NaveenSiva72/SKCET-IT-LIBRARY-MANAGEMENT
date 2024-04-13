import firebase from 'firebase/compat/app'; 
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
import {getFirestore} from '@firebase/firestore';
import {getAuth} from "firebase/auth";



const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_apiKey,
  authDomain: process.env.REACT_APP_FIREBASE_authDomain,
  databaseURL: process.env.REACT_APP_FIREBASE_databaseURL,
  projectId: process.env.REACT_APP_FIREBASE_projectId,
  storageBucket: process.env.REACT_APP_FIREBASE_storageBucket,
  messagingSenderId: process.env.REACT_APP_FIREBASE_messagingSenderId,
  appId: process.env.REACT_APP_FIREBASE_appId,
  measurementId: process.env.REACT_APP_FIREBASE_measurementId
     };
const app = initializeApp(firebaseConfig);

//used to get the sign in functionalities from the firebase
const auth =getAuth(app)

//Used to get the firebasse firestore DB contents
const db = getFirestore(app)
export {auth,db} ;
 